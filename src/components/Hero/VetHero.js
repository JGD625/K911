import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import BLUEFRENCH from '../../Images/bluefrenchsteth.png'
import './Hero.css'

export default class FirstAidHero extends Component {

        render() {
          return(
            <div className="Hero-Container">
               <Link to='/vets'>
                <h2>Find a Vet for your Pet</h2>
                <h3 className="left">K911 can help you find a local vet, where ever you may be!</h3>
                 <img src={BLUEFRENCH} className="vet-img right"/>
                </Link>
              </div>
      
          )
        }
      }