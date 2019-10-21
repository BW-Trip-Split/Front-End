import React from "react";
import styled from "styled-components";
import TripCard from "./TripCard";
import { Link } from "react-router-dom";

function TripList(props) {
  
  const TripListDiv = styled.div`
    margin: 0 auto;
    padding: 2rem 0;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  `;
  
  return (
    <>
      <TripListDiv>
        {props.currentTrips.map((element, index) => (
          <TripCard key={index} trip={element} tripID={index} isPast={false} />
        ))}
      </TripListDiv>
    </>
  );
}

export default TripList;
