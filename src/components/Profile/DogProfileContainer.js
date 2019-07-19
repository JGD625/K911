import React, { Component } from 'react';
import DogProfilePic from './DogProfilePic'
import './DogProfileContainer.css'

var DOG = {
  basicInfo: {
    name: "Jane Dog",
    gender: "Female",
    birthday: "April 3, 2010",
    location: "Los Angeles, CA",
    photo: "https://static.wixstatic.com/media/d9f074_a13d2d622e52479c8aa98a815cfa28f0~mv2.jpg/v1/fill/w_640,h_426/WeenieBoy.jpg",
    bio: "Jane Dog loves long walks, trips to the Dog Park, and tennis balls."
  }
}



export default class DogProfileContainer extends React.Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    
    return (
     <div>
        <div className="top">
          <div className="avatar-container">
            <DogProfilePic image={info.photo} /> 
          </div>
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>
          
          <hr />
            <p>{info.gender} | {info.birthday}</p>
        </div>
        
        <div className="bottom">
          <h4>Biography</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}