import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import BLUEFRENCH from '../../Images/bluefrenchsteth.png'
import LEASH from '../../Images/leash.png'
import './Hero.css'



export default class ToxinHero extends Component {

  render() {
    return(
  
      
        <div className="Hero-Container">
          <div>
            <h2>Toxin Lists!</h2>
            <p>Find out which plants, foods, and medicines can make your pup sick! </p>
          </div>
        </div>

    )
  }
}