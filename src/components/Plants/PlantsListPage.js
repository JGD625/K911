import React, { Component } from 'react'
import PlantListContext from '../../contexts/PlantListContext'
import ApiService from '../../services/api-service'
import { Section } from '../../components/Utils/Utils'
import PlantListItem from '../../components/Plants/PlantListItem'

export default class PlantListPage extends Component {
  static contextType = PlantListContext

  componentDidMount() {
    this.context.clearError()
    ApiService.getPlants()
      .then(this.context.setPlantList)
      .catch(this.context.setError)
  }

  renderPlants() {
    const { plantList = [] } = this.context
    return plantList.map(plant =>
      <PlantListItem
        key={plant.id}
        plant={plant}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='PlantListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderPlants()}
      </Section>
    )
  }
}