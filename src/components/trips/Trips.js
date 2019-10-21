import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import TripList from "./TripList";

import { testdata, pasttrips } from "../../data/data";

//https://tripsplitr.herokuapp.com/

function Trips() {
  const HeaderDiv = styled.div`
    background-color: lightgray;
    padding: 10px 30px;
    color: #333333;
    text-align: start;

    h2 {
      margin: 0;
    }

    h3 {
      margin: 0;
    }
  `;

  const [currentTrips, setCurrentTrips] = useState([]);
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
        <h2>Trip List</h2>
      </HeaderDiv>
      <TripList currentTrips={currentTrips} />
      <HeaderDiv>Past Trips</HeaderDiv>
    </>
  );
}

export default Trips;
