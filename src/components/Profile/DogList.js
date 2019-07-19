import React from 'react'
import { Link } from 'react-router-dom'
import DOG from './DogStore'



export default function DogList() {
  return (
    <>    
      <p>Choose a medicine from the list below.</p>
      <ul className='MedList'>
        {DOG.map(dogs =>
          <li key={dogs.id}>
            <a href={`/dogs/${dogs.id}`}>
              {dogs.name}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}