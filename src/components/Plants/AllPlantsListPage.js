import React, { Component } from 'react';
import './Plants.css'

class AllPlantsListPage extends Component {
  constructor(props) {
    super(props);
  }
   state = {
     isLoading: true,
     foods: [],
     error: null
   };

   fetchPlants() {
    const ReactApiKey = process.env.REACT_APP_API_KEY;
     fetch(`https://glacial-bastion-84896.herokuapp.com/api/plants`, {
        headers: {
            Authorization: `Bearer ${ReactApiKey}`
        }
        }).then(response => response.json())
          .then(data =>
            this.setState({
              plants: data,
              isLoading: false,
          })
        )
       .catch(error => this.setState({ error, isLoading: false }));
   }
 
   componentDidMount() {
     this.fetchPlants();
   }
   render() {
     const { isLoading, plants, error } = this.state;
    
     return (
       <React.Fragment>
         <div className="plant_list_container">
         {error ? <p>{error.message}</p> : null}
         {!isLoading ? (
           plants.map(plant => {
             const { plantId, name, symptom } = plant;
             return (
              <ul className="plant_list_item">
               
                 <li key={plant} ><h3 className="plant_name">{plant.name}</h3> 

                 <p className="toxicity">{plant.toxicity}</p>
                 <p><span className="teal bold">Toxic Principles: </span>{plant.toxic_principles ? <span> {plant.toxic_principles}</span> : <span>None</span>}</p>
                 <p><span className="teal bold">Symptoms:</span> {plant.symptom ? <span> {plant.symptom}</span> : <span>Safe for snacking!</span>} </p>
                 </li>
              </ul>
             );
            })
          ) : (
           <h3>Loading...</h3>
         )}
         </div>
       </React.Fragment>
      );
    }
  }

export default AllPlantsListPage;