import React, { Component } from 'react'

export const nullMedicine = {
  name: {},
  
}

const MedicineContext = React.createContext({
  medicine: nullMedicine,
  error: null,
  setError: () => {},
  clearError: () => { },
  setMedicine: () => {},
  clearMedicine: () => {},
})

export default MedicineContext

export class MedicineProvider extends Component {
  state = {
    medicine: nullMedicine,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setMedicine = medicine => {
    this.setState({ medicine })
  }

 

  clearMedicine = () => {
    this.setMedicine(nullMedicine)
  }

  

  render() {
    const value = {
      medicine: this.state.medicine,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMedicine: this.setMedicine,
      clearMedicine: this.clearMedicine,
    }
    return (
      <MedicineContext.Provider value={value}>
        {this.props.children}
      </MedicineContext.Provider>
    )
  }
}