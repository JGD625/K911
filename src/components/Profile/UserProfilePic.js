import React, { Component } from 'react';


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


export default class UserProfilePic extends React.Component {
  render() {
    var image = this.props.image /*,
        style = {
          width: this.props.width || 50,
          height: this.props.height || 50
        }*/; 
    
    if (!image) return null;
    
    return (
     <div className="avatar" >
           <img src={this.props.image} className="avatar-pic"/> 
      </div>
    );
  }
}