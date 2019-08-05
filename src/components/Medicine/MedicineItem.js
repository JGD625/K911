import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import MedicineContext from '../../contexts/MedicineListContext'
import ApiService from '../../services/api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'

export default class medicineItem extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = MedicineContext

  componentDidMount() {
    const { medicineId } = this.props.match.params
    this.context.clearError()
    ApiService.getMedicine(medicineId)
      .then(this.context.setMedicine)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearMedicine()
  }

  renderFood() {
    const { medicine } = this.context
    return <>
      <h2>{medicine.name}</h2>
      <div className="medicine-information">
    <p className="REDALERT">{medicine.toxicity}</p>
    <p>Brands: {medicine.brands}</p>
    <p>Symptoms: {medicine.symptom}</p>
    </div>
    </>
  }

  render() {
    const { error, medicine } = this.context
    let content
    if (error) {
      content = (error.error === `Sorry, we can't find that medication!`)
        ? <p className='red'>Medicine not found</p>
        : <p className='red'>There was an error</p>
    } else if (!medicine.id) {
      content = <div className='loading' />
    } else {
      content = this.renderMedicine()
    }
    return (
      <Section className='FoodPage'>
        {content}
      </Section>
    )
  }
};


