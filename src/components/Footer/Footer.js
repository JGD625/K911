import React, {Component} from 'react';
import Modal from "react-responsive-modal";
import './Footer.css';


export default class Footer extends Component {
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
      <footer className="footer">
        <button onClick={this.onOpenModal} className="disclaimer-button">DISCLAIMER</button><br/>
          <Modal open={open} onClose={this.onCloseModal} className="disclaimer-modal">
            <h2>Disclaimer</h2>
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
        
          
          <span>JDButisbauch © 2019</span><br />
          
        
      </footer>
    )
  }
}