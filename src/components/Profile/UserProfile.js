import React, { Component } from 'react';
import UserProfileContainer from './DogProfileContainer'

var USER = {
  basicInfo: {
    name: "Joe McPupper",
    gender: "Male",
    birthday: "April 19, 1990",
    location: "Los Angeles, CA",
    photo: "https://static.wixstatic.com/media/d9f074_e956d268122e44fb9979d94b4344d652~mv2.jpg/v1/fill/w_800,h_800/adult-blur-brick-walls-846741_edited.jpg",
    bio: "Joe loves his dog, hiking, and surfing."
  }
}

export default class UserProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <UserProfileContainer info={USER.basicInfo} />
      </div>
    )
  }
}
