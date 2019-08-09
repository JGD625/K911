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
  render() {
    const { open } = this.state;
    return(
      <nav className="navigation">
        <ul className="nav-list">
        <li><button className="nav-button"><Link to='/toxins'>Toxins</Link></button></li>
        <li><button className="nav-button"><Link to='/vets'>Vets</Link></button></li>
        <li><button className="nav-button"><Link to='/firstaid'>First Aid</Link></button></li>
        <li><button onClick={this.onOpenModal} className="nav-button">Disclaimer</button><br/>
          <Modal open={open} onClose={this.onCloseModal} className="disclaimer-modal">
            <h2>Disclaimer</h2>
            <img src={FAVICON} className="modal_img" alt='favicon'/>
            <p>
              Keep in mind that every dog is different. Size, age, and health affect what an individual dog can and cannot handle.
            </p>
            <p>
              Just like a 4 year old child cannot take the same dosage of medicine as a 200 pound adult man, a 7 pound chihuahua and an 80 pound lab will have different reactions.
            </p>
            <p>
              If you are unsure about your dog, please contact your local vet or, in the US, the National Animal Poison Control Center 1-800-548-2423.
            </p>
          </Modal>
          </li>
        </ul>
      </nav>
    )
  }
}