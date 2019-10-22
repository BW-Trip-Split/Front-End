import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import styled from "styled-components";
// eslint-disable-next-line
import axios from "axios";
import TripCard from "./TripCard";

import { testdata, pasttrips } from "../../data/data";

//https://tripsplitr.herokuapp.com/

const HeaderDiv = styled.div`
  background-color: #e6e2ff;
  padding: 10px 30px;
  color: #333333;
  text-align: start;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);

  h2 {
    margin: 0;
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
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

function TripsList() {
  const [currentTrips, setCurrentTrips] = useState([]);
  // eslint-disable-next-line
  const [pastTrips, setPastTrips] = useState([]);

  // useEffect(() => {
  //     axios
  //     .get("https://tripsplitr.herokuapp.com/")
  //     .then(response => {
  //         console.log(response);
  //     })
  //     .catch(error => {
  //         console.log("ERROR", error);
  //     })
  // }, [])

  useEffect(() => {
    setCurrentTrips(testdata);
    setPastTrips(pasttrips);
  }, []);

  return (
    <>
      <HeaderDiv>
        <h2>Current Trips</h2>
      </HeaderDiv>

      <CurrentTrips currentTrips={currentTrips} />

      <HeaderDiv>
        <h2>Past Trips</h2>
      </HeaderDiv>

      <PastTrips pastTrips={pastTrips} />
    </>
  );
}

//TRIPDETAILS
function CurrentTrips(props) {
  return (
    <>
      <TripListDiv>
        {props.currentTrips.map((element, index) => (
          <TripCard key={index} trip={element} tripID={index} isPast={false}/>
        ))}
      </TripListDiv>
    </>
  );
}

function PastTrips(props) {
  return (
    <>
      <TripListDiv>
        {props.pastTrips.map((element, index) => (
          <TripCard key={index} trip={element} tripID={index} isPast={true}/>
        ))}
      </TripListDiv>
    </>
  );
}

export default TripsList;
