import React, { Component } from 'react';
import './DogProfilePic.css'

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


export default class DogProfilePic extends React.Component {
  render() {
    var image = this.props.image; 
    
    if (!image) return null;
    
    return (
     <div className="avatar" >
           <img src={this.props.image} className="avatar-pic"/> 
      </div>
    );
  }
}