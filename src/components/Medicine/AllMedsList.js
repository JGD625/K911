import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MedListPage.css'
import NonToxicMedList from './NonToxicMedsList'
import './Medicine.css';
import ToxicMedList from './ToxicMedList';
import ToggleDisplay from 'react-toggle-display';


class AllMedsListPage extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  
  

  render() {
  return (
    <div>    
      <p>Choose a medicine from the list below.</p>
      <ToggleDisplay show={!this.state.show}>
      <button onClick={ () => this.handleClick() } className="togglebutton">Show All </button>
      <ToxicMedList />
      </ToggleDisplay>
     
      <ToggleDisplay show={this.state.show}>
      <button onClick={ () => this.handleClick() } className="togglebutton">Show Toxic Only</button>
      <ToxicMedList />
      <NonToxicMedList />
      </ToggleDisplay>
    </div>
  )
  }
}


export default AllMedsListPage