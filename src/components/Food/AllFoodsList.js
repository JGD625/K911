import React, { Component } from 'react';
import NonToxicFoodsList from './NonToxicFoodsList'
import ToxicFoodsList from './ToxicFoodsList.js'
import ToggleDisplay from 'react-toggle-display';


class AllFoodsList extends Component {
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
        
      <p>Choose a Food from the list below.</p>
      <ToggleDisplay show={!this.state.show}>
      <button onClick={ () => this.handleClick() } className="togglebutton">Show All </button>
     <ToxicFoodsList />
      </ToggleDisplay>
     
      <ToggleDisplay show={this.state.show}>
      <button onClick={ () => this.handleClick() } className="togglebutton">Show Toxic Only</button>
      <ToxicFoodsList />
      <NonToxicFoodsList />
      </ToggleDisplay>
    </div>
  )
  }
}


export default AllFoodsList