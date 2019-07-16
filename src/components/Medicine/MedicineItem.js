import React, { Component } from 'react';
import MEDS from './medicinestore'
import { Link } from 'react-router-dom'


export default function MedicineItem(props) {
  const medicine = MEDS.find(p =>
    p.id === props.match.params.medicineId
  )
  return (
    <div className="Plant-information">
    <h2>Name: {medicine.name}</h2>
    <div>
    <p className="REDALERT">{medicine.toxicity}</p>
    <p>Toxic Principles: {medicine.toxic_principles}</p>
    <p>Symptoms: {medicine.symptom}</p>
    </div>
    <div>
      <Link to='/medicine'>Back</Link>
    </div>
    </div>
   
  )
};


