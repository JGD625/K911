import React from 'react'
import PLANTS from './plantstore'
import './PlantsListPage.css'

export default function PlantListPage() {
  return (
    <>
      <p>Choose a plant from the list below.</p>
      <ul className='PlantList'>
        {PLANTS.map(plant =>
          <li key={plant.id}>
            <a href={`/plants/${plant.id}`}>
              {plant.name}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}