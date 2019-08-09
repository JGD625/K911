import React, {Component} from 'react';
import HM1 from '../../Images/HM1.png'
import HM2 from '../../Images/Hm2.png'
import HM3 from '../../Images/HM3.png'
import './FirstAid.css';


export default class Choking extends Component {

  render() {
    return(
      <content className="firstaid-content">
      <div className="firstaid-content">
        <h2>The Heimlich Maneuver for Dogs</h2>
        <div className="choke_flex_container">
        <div className="choke_box">
                <ul>
                   <h3 className="choke_text_position1">First, check the dog's mouth.</h3>
                    <li className="choke_text_position2">If you can see the object, gently try to remove it with your fingers.</li>
                    <li className="choke_text_position2">Be careful not to push the object further into the throat.</li>
                </ul>
                <img src={HM3} className="choke_img" alt='' />
            </div>
            <div className="choke_box">
            
               <ul>
               <h3 className="choke_text_position1">Remove your dog's collar</h3>
                <li className="choke_text_position2">Raise your dog's hind legs and hold him with his head down.</li>
                <li className="choke_text_position2">Apply compressions with a closed fist behind where the dog's ribs end</li>
               </ul>
               <img src={HM1} className="choke_img" alt='' />
            </div>
            <div className="choke_box"><ul>
                    <li><h3 className="choke_text_position1">If the dog is still choking:</h3></li>
                    <li className="choke_text_position2">Use the palm of your hand to do a sharp blow between the shoulders.</li>
                    <li className="choke_text_position2">Check the mouth for the object again.  </li>
                   
                    
                </ul>
                <img src={HM2} className="choke_img" alt='' /></div>
            </div>
        
        </div>
      </content>
    )
  }
}