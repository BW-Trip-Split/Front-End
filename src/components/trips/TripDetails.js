import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import { testdata } from "../../data/data";
import Transaction from "./Transaction";

function TripDetails(props) {
  const HeaderDiv = styled.div`
    background-color: lightgray;
    padding: 10px 30px;
    color: #333333;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
    }

    h3 {
      margin: 0;
    }
  `;

  const TripDetailsDiv = styled.div`
    margin: 0 auto;
    padding: 1rem 0;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `;

  const [trip, setTrip] = useState({});

  // useEffect(() => {
  //   const id = props.match.params.id;
  //   // const id = 8;
  //   // change ^^^ that line and grab the id from the URL
  //   // You will NEED to add a dependency array to this effect hook
  //   axios
  //     .get(`http://localhost:5000/api/movies/${id}`)
  //     .then(response => {
  //       setTrip(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, [props.match.params.id]);

  useEffect(() => {
    const id = props.match.params.id;

    setTrip(testdata[id]);
  }, [props.match.params.id]);

  if(trip.transactions != undefined)
  console.log("Transmissions", trip.transactions[0]);

  if(trip.transactions == undefined){
    return (
      <div>Loading...</div>
    );
  }
  else if(trip.transactions != undefined){
  return (
    <>
      <HeaderDiv>
        <div>
          {" "}
          <h2>Transactions</h2>
        </div>
        <div>
          <h3>{trip.name}</h3>
        </div>
      </HeaderDiv>

      <TripDetailsDiv>
        {trip.transactions.map((element, index) => (
          <Transaction key={index} transaction={element}/>
        ))}
      </TripDetailsDiv>
    </>
  );
}
}

export default TripDetails;
