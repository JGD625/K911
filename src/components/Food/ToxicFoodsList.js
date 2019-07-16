import React from 'react'
import FOODS from './foodstore'

class ToxicFoodsList extends React.Component {
  constructor() {
    super()
    this.state = {
        FOODS: [],
        filters: [
           
            {toxic: true}
          ]
      }
    }

    componentWillMount() {
        this.setState({
          FOODS,
          filteredFOODS: FOODS
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
                    { this.state.FOODS
                    .filter(FOODS => (this.state.filters.toxic && FOODS.toxic))
                                
                                .map(FOODS =>
                      <div key={FOODS.id}><a href={`/food/${FOODS.id}`}>{FOODS.name}</a></div>
                    )}
                
            </div>
            
            </section>
             )
           }
         }

     export default ToxicFoodsList