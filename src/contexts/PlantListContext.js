import React, { Component } from 'react'

const PlantListContext = React.createContext({
  plantList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPlantList: () => {},
})
export default PlantListContext

export class PlantListProvider extends Component {
  state = {
    plantList: [],
    error: null,
  };

  setPlantList = plantList => {
    this.setState({ plantList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      plantList: this.state.plantList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPlantList: this.setPlantList,
    }
    return (
      <PlantListContext.Provider value={value}>
        {this.props.children}
      </PlantListContext.Provider>
    )
  }
}