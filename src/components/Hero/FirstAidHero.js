import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import FIRSTAIDICON from '../../Images/firstaid.png'
import './Hero.css'

export default class FirstAidHero extends Component {

        render() {
          return(
        
            
              <div className="Hero-Container">
                <Link to='/firstaid'>
                <h2>First Aid</h2></Link>
                <Link to='/firstaid'>
                <img src={FIRSTAIDICON} className="firstaid-img left" alt='firstaidicon'/>
                <br /></Link>
                <Link to='/firstaid'>
                <h3 className="right">Tips to help out your pooch in a pinch.</h3>
                </Link>
              </div>
      
          )
        }
      }