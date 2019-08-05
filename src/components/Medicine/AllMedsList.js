import React, { Component } from 'react';

class AllMedsList extends Component {
  constructor(props) {
    super(props);
  }
   state = {
     isLoading: true,
     medicines: [],
     error: null
   };

   fetchMedicines() {
    const ReactApiKey = process.env.REACT_APP_API_KEY;
     fetch(`https://glacial-bastion-84896.herokuapp.com/api/medicine`, {
        headers: {
          Authorization: `Bearer ${ReactApiKey}`
        }
        }).then(response => response.json())
          .then(data =>
            this.setState({
              medicines: data,
              isLoading: false,
          })
        )
       .catch(error => this.setState({ error, isLoading: false }));
   }
 
   componentDidMount() {
     this.fetchMedicines();
   }
   render() {
     const { isLoading, medicines, error } = this.state;
    
     return (
       <React.Fragment>
         <h1>Medicine</h1>
         {error ? <p>{error.message}</p> : null}
         {!isLoading ? (
           medicines.map(medicine => {
             const { medicineId, name, } = medicine;
             return (
               
               <div>
               { medicines.map(medicine =>
                 <div key={medicine.id}><h2>{medicine.name}</h2> 
                 <p>{medicine.toxicity}</p>
                 <p>Brand Names: {medicine.brands}</p>
                 <p>Symptoms: {medicine.symptom}</p>
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



export default AllMedsList