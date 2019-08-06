import React, { Component } from 'react';

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
       <React.Fragment>
         <h1>Foods</h1>
         {error ? <p>{error.message}</p> : null}
         {!isLoading ? (
           foods.map(food => {
             const { foodId, name, symptom } = food;
             return (
               
               <div>
               { foods.map(food =>
                 <div key={food.id}><h2>{food.name}</h2> 
                 <p>{food.toxicity}</p>
                 <p>Toxic Principles: {food.toxic_principles}</p>
                 <p>Symptoms: {food.symptom}</p>
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

export default AllFoodsList