import React, { Component } from 'react'

export const nullPlant = {
  name: {},
  
}

const PlantContext = React.createContext({
  plant: nullPlant,
  error: null,
  setError: () => {},
  clearError: () => { },
  setPlant: () => {},
  clearPlant: () => {},
})

export default PlantContext

export class PlantProvider extends Component {
  state = {
    plant: nullPlant,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setPlant = plant => {
    this.setState({ plant })
  }

 

  clearPlant = () => {
    this.setPlant(nullPlant)
  }

  

  render() {
    const value = {
      plant: this.state.plant,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPlant: this.setPlant,
      clearPlant: this.clearPlant,
    }
    return (
      <PlantContext.Provider value={value}>
        {this.props.children}
      </PlantContext.Provider>
    )
  }
}