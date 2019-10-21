import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import TripList from "./TripList";

import {testdata} from "../data/data";

//https://tripsplitr.herokuapp.com/

function Trips() {

    const [currentTrips, setCurrentTrips] = useState([]);

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
    }, [])
  

  return (
    <>
      Trips
      
      <TripList currentTrips={currentTrips}/>

      Past Trips


    </>
  );
}

export default Trips;
