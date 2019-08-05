import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Hero from '../Hero/Hero'
import BLUEFRENCH from '../../Images/bluefrenchsteth.png'
import './Home.css'



export default class Header extends Component {

  render() {
    return(
      <content className="home">
        <section className="hero">
        <Hero />
        </section>
        <section className="block-links-container">
        <div className="block-link">
          <Link to='/toxins'>
          <h2>Toxins!</h2>
          </Link>
          <p>Find out which plants, foods, and animals are no good for your pup!</p>
          </div>
        </section>
        <section className="first-aid-link-container">
        <Link to='/vets'>
        <h2>Find a Vet for your Pet</h2>
        <img src={BLUEFRENCH} className="LINK-img"/>
        </Link>
        </section>
        

      </content>
    )
  }
}