import React from "react";
import "./payment-card.css";

export default function PaymentCard(props) {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={props.img} alt="payment card" />
            </div>
            <p>{props.cardId}</p>
        </div>
    );
}