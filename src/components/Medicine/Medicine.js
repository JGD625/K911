import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import MedListPage from './MedListPage'
import MedicineItem from './MedicineItem'
import './Medicine.css';
  
  
export default class Medicine extends Component {

    render() {
      return (
        <div className='medicine-content'>
          <div>
            <h1>Medicine</h1>
          </div>
          <div>
          <Route
              exact path='/medicine'
              component={MedListPage}
            />
            <Route
              path='/medicine/:medicineId'
              component={MedicineItem}
            />
          </div>
          
        </div>
      );
    }
  }