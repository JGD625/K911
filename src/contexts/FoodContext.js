import React, { Component } from 'react'

export const nullFood = {
  name: {},
  
}

const FoodContext = React.createContext({
  food: nullFood,
  error: null,
  setError: () => {},
  clearError: () => { },
  setFood: () => {},
  clearFood: () => {},
})

export default FoodContext

export class FoodProvider extends Component {
  state = {
    food: nullFood,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setFood = food => {
    this.setState({ food })
  }

 

  clearFood = () => {
    this.setFood(nullFood)
  }

  

  render() {
    const value = {
      food: this.state.food,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFood: this.setFood,
      clearFood: this.clearFood,
    }
    return (
      <FoodContext.Provider value={value}>
        {this.props.children}
      </FoodContext.Provider>
    )
  }
}