import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import PlantListPage from './PlantsListPage'
import Plant from './Plant'
import './Plants.css';


export default class Plants extends Component {

  render() {
    return (
      <div className='plants-content'>
        <div>
          <h1>Plants</h1>
        </div>
        <div>
        <Route
            exact path='/plants'
            component={PlantListPage}
          />
          <Route
            path='/plants/:plantId'
            component={Plant}
          />
        </div>
        
      </div>
    );
  }
}