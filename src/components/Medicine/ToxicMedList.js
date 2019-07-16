import React from 'react'

import MEDS from './medicinestore'

class ToxicMedList extends React.Component {
  constructor() {
    super()
    this.state = {
        MEDS: [],
        filters: [
            {toxic: true},
            
          ]
      }
    }

    componentWillMount() {
        this.setState({
          MEDS,
          filteredMEDS: MEDS
        })
        this.setCategory('toxic')
      }

    setCategory (category) {
        this.setState((state) => ({
            filters: Object.assign({}, state.filters, { [category]: !state.filters[category] })
          }));
        }
/*   disabled={!this.state.filters.toxic}  */

      render() {
        console.log(this.state.filters)
        return(
            <section>
            <div>
                    { this.state.MEDS
                    .filter(MEDS => (this.state.filters.toxic && MEDS.toxic))
                                
                                .map(MEDS =>
                      <div key={MEDS.id}><a href={`/medicine/${MEDS.id}`}>{MEDS.name}</a></div>
                    )}
                
            </div>
            
            </section>
             )
           }
         }

     export default ToxicMedList