import React from 'react'
import CardView from './card-view/CardView'
import "./how-it-works.css"

export default function HowItWorks() {

  return (
    <div className='section-container'>
        <h2  className='section-title'>Comment ça fonctionne</h2>
        <div className="cards-container">
          <CardView icon="train" 
                    title="Entrez votre itinéraire"
                    description = "Entrez le point de départ et d’arrivé de votre itinéraire."/>

          <CardView icon="sliders" 
                    title="Personnalisez les résultats"
                    description = "Filtrez les résultats selon vos critères."/>

          <CardView icon="money-check" 
                    title="Réservez le trajet"
                    description = "Choisissez l'itinéraire qui vous convient le mieux et réservez-le."/>
        </div>
    </div>
  )
}
