import React, { Component } from 'react';
import FOODS from './foodstore'


export default function foodItem(props) {
  const food = FOODS.find(p =>
    p.id === props.match.params.foodId
  )
  return (
    <div className="Food-information">
    <h2>Name: {food.name}</h2>
    <div>
    <p className="REDALERT">{food.toxicity}</p>
    <p>Toxic Principles: {food.toxic_principles}</p>
    <p>Symptoms: {food.symptom}</p>
    </div>
    </div>
   
  )
};