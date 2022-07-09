import React from "react";
import PrimaryButton from "../components/primary-button/PrimaryButton";
import Slider from "@material-ui/core/Slider";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';


function Reservation() {
    const [val2, setVal2] = React.useState([1, 5]);
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
    });
    return (
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
            <div className="map">
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: '400px',
                        width: '500px'
                    }}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                    </Layer>
                </Map>
            </div>
        </div>
    );
}

export default Reservation;