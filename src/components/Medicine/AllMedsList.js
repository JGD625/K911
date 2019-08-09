import React, { Component } from 'react';
import './Medicine.css';

class AllMedsList extends Component {
  constructor(props) {
    super(props);
  }
   state = {
     isLoading: true,
     medicines: [],
     error: null,
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
         
         <div className="medicine_list_container">
         
         {error ? <p>{error.message}</p> : null}
         {!isLoading ? (
           medicines.map(medicine => {
             const { medicineId, name, } = medicine;
             return (
              <ul className="medicine_list_item">
              <li key={medicine} ><h3 className="medicine_name">{medicine.name}</h3> 
              <p className="toxicity">{medicine.toxicity}</p>
              <p><span className="teal bold">Brands: </span> {medicine.brands}</p>
              <p><span className="teal bold">Symptoms:</span> {medicine.symptom ? <span> {medicine.symptom}</span> : <span>It's safe, but check with your vet for dosage!</span>} </p>
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



export default AllMedsList