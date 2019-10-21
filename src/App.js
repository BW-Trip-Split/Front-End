import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Trips from "./components/trips/Trips";
import People from "./components/People";
import Transactions from "./components/Transactions";
import TripDetails from "./components/trips/TripDetails";


//https://tripsplitr.herokuapp.com/

function App() {

  const deleteTrip = () => {

  }

  const editTrip = () => {

  }

  
  return (
    <div className="App">
      <Navigation/>

      <Route exact path="/" component={Trips} />
      <Route path="/people" component={People} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/trips/:id" render={props => <TripDetails {...props} />} />
      
    </div>
  );
}

export default App;
