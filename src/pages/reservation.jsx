import React, { useRef, useEffect, useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import PrimaryButton from "../components/primary-button/PrimaryButton";
import Slider from "@material-ui/core/Slider";

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1uMDA5IiwiYSI6ImNrZ3FrN25nYjA1MXQycW1mc3Y2cnV4MGYifQ.HH70YXWvUre4p-ZTxjzV5A';

function Reservation() {
    const [val2, setVal2] = React.useState([1, 5]);

    const [items, setItems] = useState([]);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-7.603869);
    const [lat, setLat] = useState(33.589886);
    const [zoom, setZoom] = useState(5);

    const handleChange = (event) => {
        let val = event.target.value.toString()
        fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + val + ".json?country=ma,eh&limit=5&proximity=ip&types=place,postcode,address,neighborhood,locality,poi&language=fr&fuzzyMatch=true&access_token=" + mapboxgl.accessToken)
            .then(res => res.json())
            .then(
                (result) => {
                    let s = []
                    result.features.forEach(e => {
                        let o = {}
                        o.id = e.id
                        o.name = e.text
                        s.push(o)
                    });
                    setItems(s);
                },
                (error) => { }
            )
    }

    async function getRoute(start, end) {
        // make a directions request using cycling profile
        // an arbitrary start will always be the same
        // only the end or destination will change
        const query = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lon},${start.lat};${end.lon},${end.lat}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
            { method: 'GET' }
        );
        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;
        const geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: route
            }
        };
        // if the route already exists on the map, we'll reset it using setData
        if (map.current.getSource('route')) {
            map.current.getSource('route').setData(geojson);
        }
        // otherwise, we'll make a new request
        else {
            map.current.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: geojson
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#1363DF',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
        }
    }

    const handleClick = (event) => {
        let startCityCoor = {}, destinationCityCoor = {}
        const startCityInput = document.getElementById("start-city").value
        const destinationCityInput = document.getElementById("destination-city").value
        fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + startCityInput + ".json?country=ma,eh&limit=1&access_token=" + mapboxgl.accessToken)
            .then(res => res.json())
            .then(
                (result) => {
                    let lon = result.features[0].center[0]
                    let lat = result.features[0].center[1]
                    startCityCoor.lon = lon
                    startCityCoor.lat = lat
                    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + destinationCityInput + ".json?country=ma,eh&limit=1&access_token=" + mapboxgl.accessToken)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                result.features.forEach(e => {
                                    let lon = result.features[0].center[0]
                                    let lat = result.features[0].center[1]
                                    destinationCityCoor.lon = lon
                                    destinationCityCoor.lat = lat
                                    getRoute(startCityCoor, destinationCityCoor)
                                });
                            },
                            (error) => { }
                        )
                },
                (error) => { }
            )

    }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/amn009/cl5jhicc4002514p9gu373cee',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <>
            <div className="inline-divs">

                <div className="form">
                    <h1>Réservez votre ticket</h1>
                    <h4>Trajet</h4>
                    <div className="input">
                        <input id="start-city" onChange={handleChange} list="start-cities" type="text" placeholder=" Point de Départ" />
                        <datalist id="start-cities">
                            {items.map(item => (
                                <option key={"start-" + item.id} value={item.name} />
                            ))}
                        </datalist>
                    </div>

                    <div className="input">
                        <input id="destination-city" onChange={handleChange} list="destination-cities" type="text" placeholder="Point de Destination" />
                        <datalist id="destination-cities">
                            {items.map(item => (
                                <option key={"destination-" + item.id} value={item.name} />
                            ))}
                        </datalist>
                    </div>

                    <h4>Date</h4>

                    <div className="input">

                        <input type="Date" placeholder="Date de départ" />

                    </div>

                    <h4>Critères</h4>

                    <div className="input">
                        <h3>Confort : </h3>
                        <Slider
                            step={1}
                            min={1}
                            max={5}
                            value={val2}
                            onChange={(ev, v) => setVal2(v)}
                            onChangeCommitted={(ev, v) => console.log(v)}
                            valueLabelDisplay="off"
                            aria-labelledby="range-slider"
                        />
                        <div className="criteria-range">
                            <div>{`${val2[0]} (Moins confortable)`}</div>
                            <div>{`${val2[1]} (Plus confortable)`}</div>
                        </div>
                    </div>
                    <div className="input">
                        <h3>Prix : </h3>
                        <Slider
                            step={1}
                            min={1}
                            max={5}
                            value={val2}
                            onChange={(ev, v) => setVal2(v)}
                            onChangeCommitted={(ev, v) => console.log(v)}
                            valueLabelDisplay="off"
                            aria-labelledby="range-slider"
                        />
                        <div className="criteria-range">
                            <div>{`${val2[0]} (Moins chère)`}</div>
                            <div>{`${val2[1]} (Plus chère)`}</div>
                        </div>
                    </div>
                    <div className="input">
                        <h3>Durée: </h3>
                        <Slider
                            step={1}
                            min={1}
                            max={5}
                            value={val2}
                            onChange={(ev, v) => setVal2(v)}
                            onChangeCommitted={(ev, v) => console.log(v)}
                            valueLabelDisplay="off"
                            aria-labelledby="range-slider"
                        />
                        <div className="criteria-range">
                            <div>{`${val2[0]} (Durée longue)`}</div>
                            <div>{`${val2[1]} (Durée courte)`}</div>
                        </div>
                    </div>
                    <PrimaryButton onClick={handleClick} label="Chercher" marginTop="15"></PrimaryButton>
                </div>

            </div>
            <div ref={mapContainer} className="map-container" />
        </>
    );
}

export default Reservation;