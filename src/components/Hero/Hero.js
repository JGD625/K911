import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import BLUEFRENCH from '../../Images/bluefrenchsteth.png'
import LEASH from '../../Images/leash.png'
import './Hero.css'



export default class Hero extends Component {

  render() {
    return(
      <content className="Hero">
      
        <div className="Hero-Container">
          <div>
            <h2>Sit. Stay. Spit that out!</h2>
            <p>Man's best friend can get into plenty of trouble around the house.  
              From the new house plant to the cake left out for a party, dogs can make a snack out of anything.
                K911 will help you find out if Fido is safe, and help you find a vet when he isn't. </p>
          </div>
        <img src={LEASH} className="HERO-img"/>
        </div>

        

      </content>
    )
  }
}