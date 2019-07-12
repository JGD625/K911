import React, { Component } from 'react';
import PLANTS from './plantstore'
import './Plant.css'

export default function Plant(props) {
  const plant = PLANTS.find(p =>
    p.id === props.match.params.plantId
  )
  return (
    <div className="Plant-information">
    <h2>Name: {plant.name}</h2>
    <div>
    <p className="REDALERT">{plant.toxicity}</p>
    <p>Toxic Principles: {plant.toxic_principles}</p>
    <p>Symptoms: {plant.symptom}</p>
    </div>
    </div>
   
  )
};