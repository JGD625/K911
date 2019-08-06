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
    const APIBase = process.env.API_BASE_URL
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
               
              <ul >
              <li key={medicine} className="medicine_list_item"><h3>{medicine.name}</h3> 
              
              <p>{medicine.toxicity}</p>
              <p>Brands: {medicine.brands}</p>
              <p>Symptoms: {medicine.symptom}</p>
             
              </li>
              </ul>
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