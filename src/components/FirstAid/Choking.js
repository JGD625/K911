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
        <div>
                <ul>
                    <li>First, check the dog's mouth.</li>
                    <li>If you can see the object, gently try to remove it with your fingers.</li>
                    <li>Be careful not to push the object further into the throat.</li>
                </ul>
            </div>
            <div><ul>
                <li>Remove your dog's collar</li>
                <li>Raise your dog's hind legs and hold him with his head down.</li>
                <li>Apply compressions with a closed fist behind where the dog's ribs end</li>
            </ul></div>
            <div><ul>
                    <li>If the dog is still choking:</li>
                    <li>Use the palm of your hand to do a sharp blow between the shoulders.</li>
                    <li>Check the mouth for the object again.  </li>
                </ul></div>
            </div>
        <div className="choke_flex_container">
        <div>
               
                <img src={HM3} className="choke_img" />
            </div>
            <div>
                <img src={HM1} className="choke_img" />
            </div>
            <div>
                
                <img src={HM2} className="choke_img" />
            </div>
        </div>
        </div>
      </content>
    )
  }
}