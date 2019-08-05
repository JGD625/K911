import React, {Component} from 'react';
import Modal from "react-responsive-modal";
import { Link } from 'react-router-dom'
import './Nav.css';

export default class Nav extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return(
      <nav className="navigation">
        <ul className="nav-list">
        <li><Link to='/toxins'>Toxins</Link></li>
        <li><Link to='/vets'>Vets</Link></li>
       
        </ul>
      </nav>
    )
  }
}