import React, {Component} from 'react';
import './YelpSearch.css'
import SearchBar from './SearchBar'
import BusinessList from './BusinessList'
import Yelp from './Helpers'



class YelpSearch extends Component {

    constructor(props){
      super(props);
      this.state = {
        businesses:[]
      };
      this.searchYelp = this.searchYelp.bind(this);
    }
    
    componentDidMount(){
      window.scrollTo(0, 0);
    }


    // search functionality with paramaters to send to API & simulate search console.log
      searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then(businesses => {
          this.setState({
            businesses: businesses
          })
        });
      };
    
      render() {
        return (
          <div className="YelpSearch">
            <h1>find a vet</h1>
            {/* add searchYelp property in Searchbar */}
              <SearchBar searchYelp={this.searchYelp}/>
              {/* set buinesslist prop: add business property set to the business array */}
              <BusinessList businesses={this.state.businesses} />
          </div>
        );
      }
    }
    
    export default YelpSearch;
    