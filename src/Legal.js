import React, { Component } from 'react';
import './index.css'

export default class Legal extends Component {

    render(){
        return(
          <div className="legal_content">
    
              <h2>K911 Legal Release</h2>
              <p className="teal bold">
                All content on this website is for informational purposes only. The content is not intended to be a substitute for professional veterinary advice, diagnosis, or treatment.
                </p>
              <p className="teal bold">
                Always seek the advice of your veterinarian or other qualified pet healthcare provider with any questions you may have regarding a medical condition. If you think your pet is having a medical emergency, contact your veterinarian immediately.
              </p>
              <p className="teal bold">
              National Animal Poison Control Center <span className="red">1-800-548-2423</span> 
              </p>
              <p className="teal bold">
              Fees may apply when contacting a provider.</p>
    
          </div>
        )
      }
    }