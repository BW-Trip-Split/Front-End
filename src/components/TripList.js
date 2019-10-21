import React from "react";
import styled from "styled-components";
import TripCard from "../components/TripCard";

function TripList(props) {
  const TripList = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      Trip List
      <TripList>
          
        {props.currentTrips.map((element, index) => (
           
          <TripCard key={index} trip={element} tripID={index}/>
        ))}
      </TripList>
    </>
  );
}

export default TripList;
