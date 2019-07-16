import React from 'react'
import PLANTS from './plantstore'

class ToxicPlantsList extends React.Component {
  constructor() {
    super()
    this.state = {
        PLANTS: [],
        filters: [
           
            {toxic: true}
          ]
      }
    }

    componentWillMount() {
        this.setState({
          PLANTS,
          filteredPLANTS: PLANTS
        })
        this.setCategory('toxic')
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
                    .filter(PLANTS => (this.state.filters.toxic && PLANTS.toxic))
                                
                                .map(PLANTS =>
                      <div key={PLANTS.id}><a href={`/plants/${PLANTS.id}`}>{PLANTS.name}</a></div>
                    )}
                
            </div>
            
            </section>
             )
           }
         }

     export default ToxicPlantsList