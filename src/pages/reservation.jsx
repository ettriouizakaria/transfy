import React from "react";
import PrimaryButton from "../components/primary-button/PrimaryButton";
import Slider from "@material-ui/core/Slider";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Path from "./path";
import { styled } from "@mui/material/styles";

function Reservation() {
  const [value, setValue] = React.useState("1");

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
      height: 10,
    },
    "& .MuiSlider-rail": {
      color: "#EDEEF1",
      height: 10,
    },
  });

  return (
    <div>
      <div className='form'>
        <form>
          <h1>Reserver votre ticket</h1>
          <h4>Traget </h4>
          <div className='input'>
            <input type='text' placeholder=' Point de Départ' />
          </div>

          <div className='input'>
            <input type='text' placeholder='Point de Destination' />
          </div>

          <h4>Date </h4>

          <div className='input'>
            <input type='Date' placeholder='Point de Destination' />
          </div>

          <h4>Critères </h4>

          <div className='input'>
            <h3>Confort : </h3>

            <PrettoSlider
              defaultValue={5}
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
              defaultValue={5}
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
              defaultValue={5}
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

          <PrimaryButton label='Chercher' marginTop='15'></PrimaryButton>
        </form>
      </div>
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
