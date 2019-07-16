import React from 'react'
import PLANTS from './plantstore'

class NonToxicPlantsList extends React.Component {
  constructor() {
    super()
    this.state = {
        PLANTS: [],
        filters: [
           
            {nontoxic: true}
          ]
      }
    }

    componentWillMount() {
        this.setState({
          PLANTS,
          filteredPLANTS: PLANTS
        })
        this.setCategory('nontoxic')
      }

    setCategory (category) {
        this.setState((state) => ({
            filters: Object.assign({}, state.filters, { [category]: !state.filters[category] })
          }));
        }


      render() {
        console.log(this.state.filters)
        return(
            <section>
            <div>
                    { this.state.PLANTS
                    .filter(PLANTS => (this.state.filters.nontoxic && PLANTS.nontoxic))
                                
                                .map(PLANTS =>
                      <div key={PLANTS.id}><a href={`/plants/${PLANTS.id}`}>{PLANTS.name}</a></div>
                    )}
                
            </div>
            
            </section>
             )
           }
         }

     export default NonToxicPlantsList