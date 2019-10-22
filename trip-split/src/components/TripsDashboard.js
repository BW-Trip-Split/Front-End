import React, {useEffect} from 'react';
import { Link ,Route} from 'react-router-dom';
import {CurrentTripCard, PastTripCard} from './TripCard';
import {getTripsByUserId} from '../actions/actions.js';
import '../styles/TripsDashboard.scss';
import {Button} from './Buttons.js';
import Navigation from './Navigation'
import TripsList from "./TripsList";
import People from "./People";
import Transactions from "./Transactions";
 import TripDetails from "./TripDetails";

//for Redux #####################################################################
import {connect} from 'react-redux'
//###############################################################################

function TripsDashboard(props) {

  useEffect(()=>{
    const user_id = localStorage.getItem('user_id')
    props.getTripsByUserId(user_id)
  }, [props.getTripsTrigger])

  const logOut = e => {
    e.preventDefault()
    localStorage.clear();
    window.location.reload();
}
   
    return (
      <div className="dashboard">
        <Navigation />
        {/* <Route exact path="/" component={TripsList} /> 
        <Route path="/people" component={People} />
        <Route path="/transactions" component={Transactions} /> 
        <Route path="/trips/:id" render={props => <TripDetails {...props} />} /> */}
        <button onClick={e => logOut(e)}>Logout</button>
        <h1>My Trips</h1>

        <Link to="/people-form">
          <Button>New Trip</Button>
        </Link>
        <div className="trip-card-container">
          {props.openTrips.map(trip => {
            return (
              <Link
                key={Math.random()}
                to={{
                  pathname: `/trip/${trip.trip_id}`,
                  state: { trip: trip }
                }}
              >
                <CurrentTripCard trip={trip} />
              </Link>
            );
          })}
        </div>

        {/* <h2>Past Trips</h2>

          {props.closedTrips.map((trip)=> {
            return ( 
              <Link key = {Math.random()} to={{pathname:`/trip/${trip.trip_id}`, state:{trip:trip}}}> 
                <PastTripCard trip = {trip}/> 
              </Link>
            )
          })} */}
      </div>
    );
} 


//for Redux #######################################################################
function mapStateToProps(state){
  return {
    trips: state.trips,
    closedTrips: state.closedTrips,
    openTrips: state.openTrips,
    getTripsTrigger: state.getTripsTrigger,
  }
}

export default connect(mapStateToProps, {getTripsByUserId})(TripsDashboard);
//###############################################################################

//1 --> import { connect }
//2--> export default connect(mapStateToProps, {})(ComponentNameHere);
//3--> function mapStateToProps(state){
//       console.log("redux in dash: ", state)
//       return {
//         whatYouWannaCallIt: state.whatItsCalledInReducer.js > defaultState{}
//       }
//     }
//4--> to use "whatYouWannaCallIt" use "props.whatYouWannaCallIt"
