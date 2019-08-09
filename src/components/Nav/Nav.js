import React, {Component} from 'react';
import Modal from "react-responsive-modal";
import { Link } from 'react-router-dom'
import FAVICON from '../../Images/k911favicon260.png'
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

  handleScroll(){
    window.scrollTo(0, 0);
  }

  render() {
    const { open } = this.state;
    return(
      <nav className="navigation">
        <ul className="nav-list">
        <li><Link to='/toxins'><button onClick={this.handleScroll} className="nav-button">Toxins</button></Link></li>
        <li><Link to='/vets'><button onClick={this.handleScroll} className="nav-button">Vets</button></Link></li>
        <li><Link to='/firstaid'><button onClick={this.handleScroll} className="nav-button">First Aid</button></Link></li>
        <li><button onClick={this.onOpenModal} className="nav-button">Disclaimer</button><br/>
          <Modal open={open} onClose={this.onCloseModal} className="disclaimer-modal">
            <h2>Disclaimer</h2>
            <img src={FAVICON} className="modal_img" alt='favicon'/>
            <p>
              Keep in mind that every dog is different. Size, age, and health affect what an individual dog can and cannot handle.
            </p>
            <p>
              Just like a 4 year old child cannot take the same dosage of medicine as a 200 pound adult man, a 7 pound chihuahua and an 80 pound lab will have different reactions.  K911 is meant for informational purposes, but cannot diagnose or treat your pet.
            </p>
            <p>
              If you are unsure about your dog, or if there is a medical emergency, please contact a veterinarian or the National Animal Poison Control Center <span className="red">1-800-548-2423</span>.
            </p>
            <p><Link to='/legal' onClick={this.onCloseModal}>Full Legal Release</Link></p>
          </Modal>
          </li>
        </ul>
      </nav>
    )
  }
}