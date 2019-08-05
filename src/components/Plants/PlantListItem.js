import React, { Component } from 'react'
import { Link } from 'react-router-dom'




export default class PlantListItem extends Component {
  render() {
    const { plant } = this.props
    return (
      <Link to={`/plant/${plant.id}`} className='ArticleListItem'>
        <header className='ArticleListItem__header'>
          <h2 className='ArticleListItem__heading'>
            {plant.name}
          </h2>
          
        </header>
        
      </Link>
    )
  }
}




