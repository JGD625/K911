import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import FirstAid from './components/FirstAid/FirstAid'
import YelpSearch from './components/Yelp/YelpSearch'
import NotFoundPage from './NotFoundPage'
import Toxins from './components/Toxins/Toxins'



function App() {
  return (
    <div className="app-container">
    <Header ></Header>
    <main className='main'>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/firstaid' component={FirstAid} />
    <Route path='/vets' component={YelpSearch} />
    <Route path='/toxins' component={Toxins} />
    <Route component={NotFoundPage} />
    </Switch>
    </main>
    <Footer></Footer>
    </div>
  );
}


export default App;