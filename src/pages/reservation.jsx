import React, { useRef, useEffect, useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import PrimaryButton from "../components/primary-button/PrimaryButton";
import Slider from "@material-ui/core/Slider";

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1uMDA5IiwiYSI6ImNrZ3FrN25nYjA1MXQycW1mc3Y2cnV4MGYifQ.HH70YXWvUre4p-ZTxjzV5A';

function Reservation() {
    const [val2, setVal2] = React.useState([1, 5]);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-7.603869);
    const [lat, setLat] = useState(33.589886);
    const [zoom, setZoom] = useState(5);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <>
            <div className="inline-divs">

                <div className="form">
                    <form >
                        <h1>Reserver votre ticket</h1>
                        <h4>Traget  </h4>
                        <div className="input">
                            <input type="text" placeholder=" Point de Départ" />
                        </div>

                        <div className="input">
                            <input type="text" placeholder="Point de Destination" />
                        </div>

                        <h4>Date  </h4>

                        <div className="input">

                            <input type="Date" placeholder="Point de Destination" />

                        </div>

                        <h4>Critères  </h4>

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
                                <div>{`${val2[0]} (moins confortable)`}</div>
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
                            <h3>Duréé: </h3>
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



                        <PrimaryButton label="Chercher" marginTop="15"></PrimaryButton>
                    </form>
                </div>

            </div>
            <div ref={mapContainer} className="map-container" />
        </>
    );
}

export default Reservation;