import React from 'react'
import PrimaryButton from '../../primary-button/PrimaryButton'
import "./newsletter.css"

export default function Newsletter() {
  return (
    <div className='section-container'>
        <div className='section-title'> 
            Abonnez-vous à notre newsletter
            <p className='section-subtitle'>et recevez tout nos offres</p>
        </div>
        <div className="form-container">
            <input type="text" placeholder='Entrez votre email...'></input>
            <PrimaryButton label="Valider"></PrimaryButton>
        </div>
    </div>
  )
}
