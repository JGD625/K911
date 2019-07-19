import React, {Component} from 'react';
import DogProfile from './DogProfile'
import UserProfile from './UserProfile';
import './Profile.css'

export default class Profile extends Component {

  render() {
    return(
      <content >
        <div className="Profile-Container">
    <UserProfile />
    <DogProfile />
     </div>
    
        
      </content>
    )
  }
}