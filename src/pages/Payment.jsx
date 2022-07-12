import React from "react";
import PaymentCard from "../components/payment/payment-card/PaymentCard";
import mastercard from "../images/mastercard.png";
import visaCard from "../images/visacard.png";
import PrimaryButton from "../components/primary-button/PrimaryButton";
import "../components/payment/payment.css";
import NewCard from "../components/payment/new card/NewCard";

export default function Payment(){
    return(
        <div className="payment">
            <h2>Payment</h2>
            <h4>Cartes acceptées</h4>
            <PaymentCard img={mastercard}  />
            <PaymentCard img={visaCard} />
            <NewCard />

            <div className="payment-footer">
                <div>
                    <h6>Total</h6>
                    <p>10.92$</p>
                </div>
                <PrimaryButton label="Payez"/>
            </div>
        </div>
    );
}