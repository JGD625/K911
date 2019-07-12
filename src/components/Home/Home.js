import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Hero from '../Hero/Hero'

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
          <Link to='/food'>FOOD</Link>
          </div>
        <div className="block-link">
          <Link to='/plants'>PLANTS</Link>
          </div>
        <div className="block-link">
          <Link to='/medicine'>MEDICINE</Link>
          </div>
        </section>
        <section className="first-aid-link-container">
        <Link to='/firstaid'>First Aid</Link>
        <h2>PUPPER FIRST AID</h2>
        </section>
        <section className="first-aid-link-container">
        <Link to='/vets'>Vets</Link>
        <h2>Find a Vet for your Pet</h2>
        </section>
        

      </content>
    )
  }
}