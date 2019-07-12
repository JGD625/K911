import React from 'react'
import MEDS from './medicinestore'
import './MedListPage.css'

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