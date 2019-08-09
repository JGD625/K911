import React, {Component} from 'react';
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import ToxinHero from '../Hero/ToxinHero'
import FirstAidHero from '../Hero/FirstAidHero'
import VetHero from '../Hero/VetHero'
import './Home.css'



export default class Header extends Component {

  render() {
    return(
      <content className="home">
        <section className="hero">
        <Hero />
        </section>
        <section className="hero">
        <ToxinHero />
        </section>
        <section className="hero">
        <VetHero />
        </section>
        <section className="hero">
        <FirstAidHero />
        </section>
        <Footer />

      </content>
    )
  }
}