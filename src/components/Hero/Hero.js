import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import BLUEFRENCH from '../../Images/bluefrenchsteth.png'
import './Hero.css'



export default class Hero extends Component {

  render() {
    return(
      <content className="Hero">
      
        <div className="Hero-Container">
          <div>
            <h2>Sit. Stay. Spit that out!</h2>
          </div>
        <img src={BLUEFRENCH} className="HERO-img"/>
        </div>

        

      </content>
    )
  }
}