import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import AllFoodsList from './AllFoodsList'
import FoodItem from './FoodItem'
import './Food.css';


export default class Food extends Component {

  render() {
    return (
      <div className='foods-content'>
        <div>
          <h1>Foods</h1>
        </div>
        <div>
        <Route
            exact path='/food'
            component={AllFoodsList}
          />
        </div>
        
      </div>
    );
  }
}