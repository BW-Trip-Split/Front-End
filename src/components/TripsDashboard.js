import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
// import { CurrentTripCard, PastTripCard } from "./TripCard";
import  CurrentTripCard from "./TripCard";
import { getTripsByUserId } from "../actions/actions.js";
import "../styles/TripsDashboard.scss";
import { Button } from "./Buttons.js";
import Navigation from "./Navigation";
import TripsList from "./TripsList";
import People from "./People";
import Transactions from "./Transactions";
import TripDetails from "./TripDetails";
import styled from "styled-components";
import PeopleForm from "./PeopleForm";

//for Redux #####################################################################
import { connect } from "react-redux";
//###############################################################################

const HeaderDiv = styled.div`
  background-color: #e6e2ff;
  padding: 10px 30px;
  color: #333333;
  text-align: start;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);

  h2 {
    margin: 0;
    font-size: 1.4rem;
    text-align: center;
  }

  h3 {
    margin: 0;
    
  }
`;

const TripListDiv = styled.div`
  margin: 1rem auto;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: column-reverse wrap;
  justify-content: center;
  align-items: center;

  // border: 1px solid red;

  a {
    width: 45%;
    color: black;

    @media (max-width: 1200px) {
      width: 60%;
    }

    @media (max-width: 900px) {
      width: 70%;
    }

    @media (max-width: 750px) {
      width: 85%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

const AddTripButton = styled.button`
  border: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);
  background-color: #183c56;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: fixed;
  bottom: 30px;
  // left: 90%;
  right: 30px;
  margin-left: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  i {
    font-size: 24px;
  }
`;

function TripsDashboard(props) {

  const [toggleFormDisplay, setFormDisplay] = useState(false);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    props.getTripsByUserId(user_id);
  }, [props.getTripsTrigger]);

  const logOut = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  const toggleForm = () => {
    console.log("Add Trip Button clicked");
    setFormDisplay(!toggleFormDisplay);
  }

  console.log("TOGGLEFORMDISPLAY", toggleFormDisplay);
  return (
    // <div className="dashboard">
    <>
      <HeaderDiv>
        <h2>Current Trips</h2>
      </HeaderDiv>

      {/* <button onClick={e => logOut(e)}>Logout</button> */}

      {/* <Link to="/people-form"> */}
    <PeopleForm toggleFormDisplay={toggleFormDisplay} toggleForm={toggleForm}/>
      {/* <PeopleForm style={{ display: toggleFormDisplay ? "block !important" : "none" }}/> */}
      <AddTripButton onClick={event => toggleForm()}>
        <i className="fas fa-plus fa-2x"></i>
      </AddTripButton>
      {/* </Link> */}

      <TripListDiv>
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
      </TripListDiv>

      {/* <h2>Past Trips</h2>

          {props.closedTrips.map((trip)=> {
            return ( 
              <Link key = {Math.random()} to={{pathname:`/trip/${trip.trip_id}`, state:{trip:trip}}}> 
                <PastTripCard trip = {trip}/> 
              </Link>
            )
          })} */}
    </>
  );
}

//for Redux #######################################################################
function mapStateToProps(state) {
  return {
    trips: state.trips,
    closedTrips: state.closedTrips,
    openTrips: state.openTrips,
    getTripsTrigger: state.getTripsTrigger
  };
}

export default connect(
  mapStateToProps,
  { getTripsByUserId }
)(TripsDashboard);
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
