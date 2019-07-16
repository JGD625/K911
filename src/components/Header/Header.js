import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import Nav from '../Nav/Nav';

import LOGO from '../../Images/k911png.png'
import BLUEDOG from '../../Images/BlueDog.png'


export default class Header extends Component {

  render() {
    return(
      <header className="header">
      
        <div className="header-left">
          <img src={BLUEDOG} className="header-logo"/>
            <h1>
             <Link to='/' className="title">K911</Link>
            </h1>
        </div>
        <Nav></Nav>
      </header>
    )
  }
}