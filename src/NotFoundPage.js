import React, { Component } from 'react'
import './NotFoundPage.css'


export default class NotFoundPage extends Component {
  render() {
    return (
      <div className='NotFoundPage-container'>
        <h2>Page Not Found</h2>
        <p>This page doesn't exist, try going back or using the navigation menu</p>
      </div>
    )
  }
}