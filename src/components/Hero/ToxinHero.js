import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import TOXINICON from '../../Images/toxinsicon.png'
import './Hero.css'



export default class ToxinHero extends Component {

  render() {
    return(
  
      
      <div className="Hero-Container">
      <Link to='/toxins'>
      <h2>Toxins</h2></Link>
      <Link to='/toxins'>
      <h3 className="right">Check common foods, plants, and medications to see if theyre safe for fido.</h3>
      </Link>
      <Link to='/toxins'>
      <img src={TOXINICON} className="TOXINIMG left" alt=''/>
      </Link>
    </div>

    )
  }
}