import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AllFoodsList from '../../components/Food/AllFoodsList'
import AllPlantsList from '../../components/Plants/AllPlantsListPage'
import AllMedsList from '../../components/Medicine/AllMedsList'
import FOODICON from '../../Images/drumstick.png'
import MEDICON from '../../Images/medicon.png'
import PLANTICON from '../../Images/planticon.png'



export default class ToxinsResults extends Component{
render() {
      return (
     
        <section className="block-links-container">
            <div className="block-link" onClick={this.handleFood} >
              <img src={FOODICON} className="LINK-img" />
              <h2>FOOD</h2>
              </div>
            <div className="block-link" onClick={this.handlePlant} >
              <img src={PLANTICON} className="LINK-img" />
              <h2>PLANTS</h2>
              </div>
            <div className="block-link" onClick={this.handleMedicine} >
              <img src={MEDICON} className="LINK-img" />
              <h2>MEDICINE</h2>
              </div>
              </section>
            

     )
    }
    }
  