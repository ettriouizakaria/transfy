import React, { useState } from "react";
import PrimaryButton from "../../primary-button/PrimaryButton";
import "./order.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { TimelineOppositeContent } from "@mui/lab";

export default function Order(props) {
  const [showItinerary, setShowItinerary] = useState(false);
  const changeShowItinerary = () => {
    setShowItinerary(!showItinerary);
  };
  return (
    <>
      <tr
        className='row'
        style={{ backgroundColor: showItinerary ? "#2291a50f" : "" }}>
        <td>{props.supplier}</td>
        <td>{props.price} DH</td>
        <td>{props.departureDate}</td>
        <td>{props.startingPoint}</td>
        <td>{props.arrivalPoint}</td>
        <td>
          <PrimaryButton
            onClick={changeShowItinerary}
            label='Itinéraire'></PrimaryButton>
        </td>
      </tr>
      {showItinerary && (
        <tr style={{ backgroundColor: showItinerary ? "#2291a50f" : "" }}>
          <td colSpan='6'>
            <div className='itinerary'>
              <div className='itinerary-header'>
                <h3>Itinéraire complet</h3>
              </div>
              <div className='itinerary-body'>
                {props.itinerary.map((route, index) => (
                  <Timeline key={index} position='alternate'>
                    <TimelineItem>
                      <TimelineOppositeContent display={"none"} />
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            width: 14,
                            height: 14,
                            backgroundColor:
                              index === 0
                                ? "#F2615E"
                                : index === props.itinerary.length - 1
                                ? "#58C187"
                                : "#BDBDBD",
                          }}
                        />
                        {index < props.itinerary.length - 1 && (
                          <TimelineConnector />
                        )}
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        {index < props.itinerary.length - 1 && (
                          <Typography variant='h6' component='span'>
                            {route.meanOfTransport}
                          </Typography>
                        )}
                        <Typography>{route.location} </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                ))}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
