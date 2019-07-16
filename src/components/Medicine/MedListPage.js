import React from 'react'
import { Link } from 'react-router-dom'
import MEDS from './medicinestore'
import './MedListPage.css'

import MedicineItem from './MedicineItem'
import NonToxicMedList from './NonToxicMedsList'
import './Medicine.css';
import AllMedsList from './AllMedsList'

import ToxicMedList from './ToxicMedList';


export default function MedListPage() {
  return (
    <>    
      <p>Choose a medicine from the list below.</p>
      <ul className='MedList'>
        {MEDS.map(medicine =>
          <li key={medicine.id}>
            <a href={`/medicine/${medicine.id}`}>
              {medicine.name}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}