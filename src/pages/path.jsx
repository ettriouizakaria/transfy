import React from "react";
import Rating from "@mui/material/Rating";

export default function Path(props) {
  return (
    <div className='path'>
      <h3>{props.type}</h3>

      <div className='path-details-container'>
        <div className='path-detail-label'> Trajet:</div>
        <div className='path-detail-value'>
          {props.from} {"-->"} {props.to}
        </div>
      </div>

      {props.rating && (
        <div className='path-details-container'>
          <span className='path-detail-label'> Evaluation:</span>
          <Rating
            className='path-detail-value'
            name='read-only'
            value={props.rating}
            readOnly
          />
        </div>
      )}

      <div className='path-details-container'>
        <div className='path-detail-label'>
          {props.price.approximate ? "Côut approximatif :" : "Côut"}
        </div>
        <div className='path-detail-value'> {props.price.value} DH</div>
      </div>
    </div>
  );
}
