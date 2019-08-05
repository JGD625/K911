import React, { Component } from 'react';
import FOODS from './foodstore'


export default function foodItem(state) {

  
  return (
    <div className="Food-information" >
    <h2>Name: {this.state.name}</h2>
    <div>
    <p className="REDALERT">{this.state.toxicity}</p>
    <p>Toxic Principles: {this.state.toxic_principles}</p>
    <p>Symptoms: {this.state.symptom}</p>
    </div>
    </div>
   
  )
};