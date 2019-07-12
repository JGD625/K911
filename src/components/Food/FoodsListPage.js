import React from 'react'
import FOODS from './foodstore'
import './FoodListPage.css'

export default function FoodListPage() {
  return (
    <>
      <p>Choose a plant from the list below.</p>
      <ul className='FoodList'>
        {FOODS.map(food =>
          <li key={food.id}>
            <a href={`/food/${food.id}`}>
              {food.name}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}