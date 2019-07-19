import React, {Component} from 'react';
import Modal from "react-responsive-modal";
import { Link } from 'react-router-dom'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import Profile from '../Profile/Profile'
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
        <li>
        <button onClick={this.onOpenModal}>Join</button><br/>
          <Modal open={open} onClose={this.onCloseModal}>
          <RegistrationForm />
          </Modal>
                </li>
          <li><Link to='/profile'>Demo</Link>
          </li>
        </ul>
      </nav>
    )
  }
}