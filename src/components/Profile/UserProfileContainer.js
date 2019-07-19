import React, { Component } from 'react';
import UserProfilePic from './UserProfilePic'

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



export default class UserProfileContainer extends React.Component {
  render() {
    var info = this.props.info;
    if (!info) return null;
    
    return (
     <div>
        <div className="top">
          <div className="avatar-container">
            <UserProfilePic image={info.photo} /> 
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