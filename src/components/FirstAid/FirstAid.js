import React, {Component} from 'react';
import HeatStroke from './HeatStroke'
import Bites from './Bites'
import Choking from './Choking'
import './FirstAid.css';


export default class FirstAid extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <content className="firstaid">
      <h2>First Aid</h2>
          <Choking />
          <Bites />
          <HeatStroke />
         
        
      </content>
    )
  }
}