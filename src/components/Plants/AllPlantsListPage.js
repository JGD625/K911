import React, { Component } from 'react';

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
         <h1>Plants</h1>
         {error ? <p>{error.message}</p> : null}
         {!isLoading ? (
           plants.map(plant => {
             const { plantId, name, symptom } = plant;
             return (
               
               <div>
               { plants.map(plant =>
                 <div key={plant.id}><h2>{plant.name}</h2> 
                 <p>{plant.toxicity}</p>
                 <p>Toxic Principles: {plant.toxic_principles}</p>
                 <p>Symptoms: {plant.symptom}</p>
                 </div>
               )}
           
       </div>
             );
           })
         ) : (
           <h3>Loading...</h3>
         )}
       </React.Fragment>
     );
   }
 }



export default AllPlantsListPage