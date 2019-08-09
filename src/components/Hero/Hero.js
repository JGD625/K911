import React, {Component} from 'react';
import LEASH from '../../Images/leash.png'
import './Hero.css'



export default class Hero extends Component {

  render() {
    return(
      <content className="Hero">
      
        <div className="Hero-Container">
          <div className="hero-content">
            <h2>Sit. Stay. Spit that out!</h2>
            <h3 >Man's best friend can get into plenty of trouble around the house.  
              Plants, people food, and pills... dogs can make a snack out of anything!
              Find out if Fido is safe, or find a vet if he isn't. 
        </h3>
        </div>
        <img src={LEASH} className="HERO-img" alt=''/>
        </div>
        

      </content>
    )
  }
}