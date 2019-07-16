import React from 'react'
import FOODS from './foodstore'

class NonToxicFoodsList extends React.Component {
  constructor() {
    super()
    this.state = {
        FOODS: [],
        filters: [
           
            {nontoxic: true}
          ]
      }
    }

    componentWillMount() {
        this.setState({
          FOODS,
          filteredFOODS: FOODS
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
                    { this.state.FOODS
                    .filter(FOODS => (this.state.filters.nontoxic && FOODS.nontoxic))
                                
                                .map(FOODS =>
                      <div key={FOODS.id}><a href={`/food/${FOODS.id}`}>{FOODS.name}</a></div>
                    )}
                
            </div>
            
            </section>
             )
           }
         }

     export default NonToxicFoodsList