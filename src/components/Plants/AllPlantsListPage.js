import React, { Component } from 'react';
import ToxicPlantsList from './ToxicPlantsList'
import NonToxicPlantsList from './NonToxicPlantsList'
import ToggleDisplay from 'react-toggle-display';


class AllPlantsListPage extends Component {
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
      <ToxicPlantsList />
      </ToggleDisplay>
     
      <ToggleDisplay show={this.state.show}>
      <button onClick={ () => this.handleClick() } className="togglebutton">Show Toxic Only</button>
      <ToxicPlantsList />
      <NonToxicPlantsList />
      </ToggleDisplay>
    </div>
  )
  }
}


export default AllPlantsListPage