import React, { useRef, useEffect, useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import PrimaryButton from "../components/primary-button/PrimaryButton";
import Slider from "@material-ui/core/Slider";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Path from "./path";
import { styled } from "@mui/material/styles";

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1uMDA5IiwiYSI6ImNrZ3FrN25nYjA1MXQycW1mc3Y2cnV4MGYifQ.HH70YXWvUre4p-ZTxjzV5A';

function Reservation() {
  const [value, setValue] = React.useState("1");

  const [items, setItems] = useState([]);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-7.603869);
  const [lat, setLat] = useState(33.589886);
  const [zoom, setZoom] = useState(5);

  const startMarker = new mapboxgl.Marker({
    color: "#EB4747",
    draggable: false
  })
  const int1Marker = new mapboxgl.Marker({
    color: "#F9D923",
    draggable: false
  }).setLngLat([-5.005019, 34.046856])
  const int2Marker = new mapboxgl.Marker({
    color: "#F9D923",
    draggable: false
  }).setLngLat([-6.855925, 34.0020595])
  const endMarker = new mapboxgl.Marker({
    color: "#5FD068",
    draggable: false
  })

  const handleInput = (event) => {
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
            o.place = e.place_name
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
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lon},${start.lat};-5.005019,34.046856;-6.855925,34.0020595;${end.lon},${end.lat}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
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
      startMarker.setLngLat([start.lon, start.lat])
        .addTo(map.current);
      int1Marker.addTo(map.current);
      int2Marker.addTo(map.current);
      endMarker.setLngLat([end.lon, end.lat])
        .addTo(map.current);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const PrettoSlider = styled(Slider)({
    color: "#2291A5",
    height: 10,

    "& .MuiSlider-thumb": {
      color: "#2291A5",
      width: 20,
      height: 20,
    },
    "& .MuiSlider-valueLabel": {
      marginLeft: 10,
    },
    "& .MuiSlider-track": {
      height: 8,
    },
    "& .MuiSlider-rail": {
      color: "#1971814d",
      height: 8,
    },
  });

  return (
    <div>
      <div className='form'>

        <h1>Reserver votre ticket</h1>
        <h4>Traget </h4>
        <div className="input">
          <input id="start-city" onChange={handleInput} list="start-cities" type="text" placeholder=" Point de Départ" />
          <datalist id="start-cities">
            {items.map(item => (
              <option key={"start-" + item.id} value={item.name}>{item.place}</option>
            ))}
          </datalist>
        </div>

        <div className="input">
          <input id="destination-city" onChange={handleInput} list="destination-cities" type="text" placeholder="Point de Destination" />
          <datalist id="destination-cities">
            {items.map(item => (
              <option key={"destination-" + item.id} value={item.name}>{item.place}</option>
            ))}
          </datalist>
        </div>

        <h4>Date </h4>

        <div className='input'>
          <input type='Date' placeholder='Point de Destination' />
        </div>

        <h4>Critères </h4>

        <div className='input'>
          <h3>Confort : </h3>

          <PrettoSlider
            defaultValue={1}
            aria-label='Default'
            valueLabelDisplay='auto'
            step={1}
            min={1}
            max={5}
            aria-labelledby='range-slider'
          />
          <div className='criteria-range'>
            <div>{` Moins confortable`}</div>
            <div>{` Plus confortable`}</div>
          </div>
        </div>
        <div className='input'>
          <h3>Prix : </h3>
          <PrettoSlider
            defaultValue={1}
            aria-label='Default'
            valueLabelDisplay='auto'
            step={1}
            min={1}
            max={5}
            aria-labelledby='range-slider'
          />
          <div className='criteria-range'>
            <div>{` Moins chère`}</div>
            <div>{` Plus chère`}</div>
          </div>
        </div>
        <div className='input'>
          <h3>Duréé: </h3>
          <PrettoSlider
            defaultValue={1}
            aria-label='Default'
            valueLabelDisplay='auto'
            step={1}
            min={1}
            max={5}
            aria-labelledby='range-slider'
          />
          <div className='criteria-range'>
            <div>{` Durée longue`}</div>
            <div>{`Durée courte`}</div>
          </div>
        </div>

        <PrimaryButton onClick={handleClick} label="Chercher" marginTop="15"></PrimaryButton>

      </div>
      <div ref={mapContainer} className="map-container" />
      <div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#2291A5",
                  },
                }}
                textColor={"#000"}
                variant='fullWidth'
                onChange={handleChange}
                aria-label='lab API tabs example'>
                <Tab label='Choix 1' value='1' />
                <Tab label='Choix 2' value='2' />
                <Tab label='Choix 3' value='3' />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <div className='iteneraire'>
                <h2>Iteneraire</h2>
                <Path
                  type='Petit Taxi'
                  from='Route Ain Chkef, Fès'
                  to='Gare train, Fès'
                  price={{ value: "14.5", approximate: true }}></Path>
                <Path
                  type='Train'
                  from='Gare train, Fès'
                  to='Gare train, Agdal, Rabat'
                  price={{ value: "113", approximate: false }}
                  rating='4'></Path>
                <Path
                  type='Petit Taxi'
                  from='Gare train, Agdal, Rabat'
                  to='Rue Saadiyin, Rabat'
                  price={{ value: "25", approximate: true }}></Path>

                <div className='book-itinerary'>
                  <h3>Montant à payer : 113 DH</h3>
                  <PrimaryButton label='Reserver'></PrimaryButton>
                </div>
              </div>
            </TabPanel>
            <TabPanel value='2'>Item Two</TabPanel>
            <TabPanel value='3'>Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default Reservation;
