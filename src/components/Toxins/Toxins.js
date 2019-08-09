import React, { Component } from 'react';
import FOODICON from '../../Images/drumstick.png'
import MEDICON from '../../Images/medicon.png'
import PLANTICON from '../../Images/planticon.png'
import AllFoodsList from '../Food/AllFoodsList'
import AllMedsList from '../Medicine/AllMedsList'
import AllPlantsListPage from '../Plants/AllPlantsListPage'
import './Toxins.css'


export default class Toxins extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentview: ''
    };
    this.handlePlant = this.handlePlant.bind(this);
    this.handleFood = this.handleFood.bind(this);
    this.handleMedicine = this.handleMedicine.bind(this);
}

componentDidMount(){
  window.scrollTo(0, 0);
}
  
handlePlant(e) {
  this.setState({ currentview: 'plant' });
}
handleFood(e) {
  this.setState({ currentview: 'food' });
}
handleMedicine(e) {
  this.setState({ currentview: 'medicine' });
}


  render(){
    if(this.state.currentview === '') {
      return (
        <section className="toxinlinks-container">
            <div className="block-link" onClick={this.handleFood} >
              <img src={FOODICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">FOOD</h2>
              </div>
            <div className="block-link" onClick={this.handlePlant} >
              <img src={PLANTICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">PLANTS</h2>
              </div>
            <div className="block-link" onClick={this.handleMedicine} >
              <img src={MEDICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">MEDICINE</h2>
              </div>
              </section>);
    }else if(this.state.currentview === 'plant') {
      return (
        <div>
        <section className="toxinlinks-container">
            <div className="block-link" onClick={this.handleFood} >
              <img src={FOODICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">FOOD</h2>
              </div>
            <div className="block-link" onClick={this.handlePlant} >
              <img src={PLANTICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">PLANTS</h2>
              </div>
            <div className="block-link" onClick={this.handleMedicine} >
              <img src={MEDICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">MEDICINE</h2>
              </div>
              </section>
              <section className="results_list">
                <AllPlantsListPage />
              </section>
          </div>);
    }else if(this.state.currentview === 'medicine') {
      return (
        <div>
        <section className="toxinlinks-container">
            <div className="block-link" onClick={this.handleFood} >
              <img src={FOODICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">FOOD</h2>
              </div>
            <div className="block-link" onClick={this.handlePlant} >
              <img src={PLANTICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">PLANTS</h2>
              </div>
            <div className="block-link" onClick={this.handleMedicine} >
              <img src={MEDICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">MEDICINE</h2>
              </div>
              </section>
              <section className="results_list">
                <AllMedsList />
              </section>
          </div>);
    }else return(
      <div>
        <section className="toxinlinks-container">
            <div className="block-link" onClick={this.handleFood} >
              <img src={FOODICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">FOOD</h2>
              </div>
            <div className="block-link" onClick={this.handlePlant} >
              <img src={PLANTICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">PLANTS</h2>
              </div>
            <div className="block-link" onClick={this.handleMedicine} >
              <img src={MEDICON} className="toxin_link" alt='' />
              <h2 className="toxin_smaller_h2">MEDICINE</h2>
              </div>
              </section>
              <section className="results_list">
                <AllFoodsList />
              </section>
          </div>
   
      );
    }
  }


