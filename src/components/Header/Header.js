import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import Nav from '../Nav/Nav';
import BLUEDOG from '../../Images/BlueDog.png'


export default class Header extends Component {

  render() {
    return(
      <header className="header">
      
        <div className="header-left">
          <img src={BLUEDOG} className="header-logo" alt='logo'/>
            <h1>
             <Link to='/' className="title">K911</Link>
            </h1>
        </div>
        <Nav></Nav>
      </header>
    )
  }
}