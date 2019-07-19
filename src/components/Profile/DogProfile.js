import React, { Component } from 'react';
import DogProfileContainer from './DogProfileContainer'

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

export default class DogProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <DogProfileContainer info={DOG.basicInfo} />
      </div>
    )
  }
}
