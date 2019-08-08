import React, {Component} from 'react';
import SUNICON from '../../Images/sunicon.png'

class HeatStroke extends Component {
    render() {
        return(
            <div className="firstaid-content">
                <h2>Heat Stroke</h2>
                <h3>Recognizing Heat Stroke</h3>
                <p>Signs of heat stroke or heat exhaustion include collapse; body temperature of 104 degrees F or above; bloody diarrhea or vomiting; wobbliness; excessive panting or difficulty breathing; increase heart rate; and increased salivation.
                </p>
                <h3>Seek Veterinary Care Immediately!</h3>
                <img src={SUNICON} className="SUNICON" />
                <ul>
                <li>Use cool water but not ice water to cool your pet keeping the temperature no lower than 103 degrees to avoid hypothermia (too cold), which can cause the blood vessels to constrict.</li>
                <li>Offer ice cubes to lick until you can see a vet.</li>
                <li>The best cure for heat stroke is prevention.</li>
                </ul>
                <p>Don't leave your pet in a parked car. Even with the windows down or on a cooler day, the temperature of the car can become very hot.
                </p>
                <p>During summer, avoid walking your dog during the hottest time of the day. Dogs do not sweat, and it can be hard for them to cool down. Even a fit dog can over heat while playing and running outside during hotter times of the year.
                </p>
                <p>Make sure your pet has plenty of access to water and shade. Pools, sprinklers, and ponds can be great ways to give your dog some relief!</p>
            </div>
                
        )
    }
}

export default  HeatStroke

