import React, { useState, useEffect } from "react";
import styled from "styled-components";
// eslint-disable-next-line
import axios from "axios";
// eslint-disable-next-line
import { testdata } from "../data/data";
import Transaction from "./Transaction";

const HeaderDiv = styled.div`
  background-color: #e6e2ff;
  padding: 10px 30px;
  color: #333333;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
  }
`;

const TripSummary = styled.div`
  margin: 1rem;

  h4 {
    color: green;
    font-size: 1.8rem;
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

function TripDetails(props) {
  const [trip, setTrip] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    setId(id);
    // const id = 8;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    axios
      .get(`https://tripsplitr.herokuapp.com/expenses/`)
      .then(response => {
        setExperiences(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  useEffect(() => {
    axios
      .get(`https://tripsplitr.herokuapp.com/trips/${id}`)
      .then(response => {
        setTrip(response.data);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }, [id]);

  // useEffect(() => {
  //   const id = props.match.params.id;
  //   console.log("Params ID is: " + props.match.params.id, "ID is: " + id);
  //   setTrip(testdata[id]);
  //   console.log("Logging trip: ", trip);
  // }, [props.match.params.id]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  const amount = formatter.format(trip.base_cost);

  if (typeof experiences == "undefined") {
    return <div>Loading...</div>;
  } else if (typeof experiences != "undefined") {
    return (
      <>
        <HeaderDiv>
          <div>
            <h2>Transactions</h2>
          </div>
          <div>
            <h3>{trip.name}</h3>
          </div>
        </HeaderDiv>

        <TripSummary>
          <h4>{amount} spent</h4>
        </TripSummary>

        <TripDetailsDiv>
          {experiences.map((element, index) =>
            element.trip_id == id - 1 ? <Transaction key={index} transaction={element} trip={trip} /> : null
          )}

          {/* {trip.transactions.map((element, index) => (
            <Transaction key={index} transaction={element} />
          ))} */}
        </TripDetailsDiv>
      </>
    );
  }
}

export default TripDetails;
