import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

export default class Nav extends Component {

  render() {
    return(
      <nav className="navigation">
        <ul className="nav-list">
        <li>
        
        Join
        
          </li>
          <li>
            Demo
          </li>
        </ul>
      </nav>
    )
  }
}