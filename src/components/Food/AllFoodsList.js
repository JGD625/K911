import React, { Component } from 'react';
import './Food.css';

class AllFoodsList extends Component {
  constructor(props) {
    super(props);
  }
   state = {
     isLoading: true,
     foods: [],
     error: null
   };

   fetchFoods() {
    const ReactApiKey = process.env.REACT_APP_API_KEY;
    const APIBase = process.env.API_BASE_URL;
     fetch(`https://glacial-bastion-84896.herokuapp.com/api/foods`, {
        headers: {
          Authorization: `Bearer ${ReactApiKey}`
        }
        }).then(response => response.json())
          .then(data =>
            this.setState({
              foods: data,
              isLoading: false,
          })
        )
       .catch(error => this.setState({ error, isLoading: false }));
   }
 
   componentDidMount() {
     this.fetchFoods();
   }
   render() {
     const { isLoading, foods, error } = this.state;
    
     return (
       <React.Fragment><div className="food_list_container">
         {error ? <p>{error.message}</p> : null}
         {!isLoading ? (
           foods.map(food => {
             const { foodId, name, symptom } = food;
             return ( 
               <ul  className="food_list_item">
                 <li key={food} ><h3 className="food_name">{food.name}</h3> 
                 
                 <p className="toxicity">{food.toxicity}</p>
                 <p>Toxic Principles: {food.toxic_principles}</p>
                 <p>Symptoms: {food.symptom}</p>
                
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

export default AllFoodsList