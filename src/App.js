import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Navbar from '../src/components/navbar'
import Movies from '../src/components/movies'
import Rentals from '../src/components/rentals'
import NotFound from '../src/components/notFound'
import Customers from '../src/components/customers'
import Login from '../src/components/loginForm'
class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <main className="container">
       <Switch>
        <Route  path="/movies" component={Movies}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/rentals" component={Rentals}/>
        <Route  path="/customers" component={Customers}/>
        <Redirect from="/" exact to="/movies"/>
        <Redirect to="/not-found" component={NotFound}/>
       </Switch>
      </main>
      </div>
    );
  }
}

export default App;
