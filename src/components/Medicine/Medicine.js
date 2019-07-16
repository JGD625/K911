import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import MedListPage from './MedListPage'
import MedicineItem from './MedicineItem'
import NonToxicMedList from './NonToxicMedsList'
import './Medicine.css';
import AllMedsList from './AllMedsList'
import ToxicMedList from './ToxicMedList';


  
  
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
              component={AllMedsList}
            />
            <Route
              path='/medicine/:medicineId'
              component={MedicineItem}
            />
            
            <Route
              path='/medicine/NonToxicMedList'
              component={NonToxicMedList}
            />
            <Route
              path='/medicine/AllMedList'
              component={AllMedsList}
            />
            
          </div>
          
        </div>
      );
    }
  }
