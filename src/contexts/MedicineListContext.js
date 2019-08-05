import React, { Component } from 'react'

const MedicineListContext = React.createContext({
  medicineList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setMedicineList: () => {},
})
export default MedicineListContext

export class MedicineListProvider extends Component {
  state = {
    medicineList: [],
    error: null,
  };

  setMedicineList = medicineList => {
    this.setState({ medicineList })
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
      medicineList: this.state.medicineList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMedicineList: this.setMedicineList,
    }
    return (
      <MedicineListContext.Provider value={value}>
        {this.props.children}
      </MedicineListContext.Provider>
    )
  }
}