import React, {Component} from 'react';
import HeatStroke from './HeatStroke'
import Bites from './Bites'
import Choking from './Choking'
import './FirstAid.css';


export default class FirstAid extends Component {

  render() {
    return(
      <content className="firstaid">
        
          <div className="firstaid-content">FIRSTAID CONTENT</div>
          <Choking />
          <Bites />
          <HeatStroke />
         
        
      </content>
    )
  }
}