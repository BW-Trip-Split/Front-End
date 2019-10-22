import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Navigation from "./components/Navigation";
// eslint-disable-next-line
import Home from "./components/Home";
import TripsList from "./components/trips/TripsList";
import People from "./components/People";
import Transactions from "./components/Transactions";
import TripDetails from "./components/trips/TripDetails";

//https://tripsplitr.herokuapp.com/

// #44ffee
// #77e5db

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" component={TripsList} />
      <Route path="/people" component={People} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/trips/:id" render={props => <TripDetails {...props} />} />
      <Route path="/login" component={TripsList}/>
    </div>
  );
}

export default App;
