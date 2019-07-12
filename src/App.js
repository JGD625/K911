import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Food from './components/Food/Food'
import Plants from './components/Plants/Plants'
import Medicine from './components/Medicine/Medicine'
import FirstAid from './components/FirstAid/FirstAid'
import YelpSearch from './components/Yelp/YelpSearch'
import NotFoundPage from './NotFoundPage'

function App() {
  return (
    <div className="app-container">
    <Header ></Header>
    <main className='main'>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/food' component={Food} />
    <Route path='/plants' component={Plants} />
    <Route path='/medicine' component={Medicine} />
    <Route path='/firstaid' component={FirstAid} />
    <Route path='/vets' component={YelpSearch} />
    <Route component={NotFoundPage} />
    </Switch>
    </main>
    <Footer></Footer>
    </div>
  );
}


export default App;