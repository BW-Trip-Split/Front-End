import React, { useState, useEffect } from "react";
import styled from "styled-components";
// eslint-disable-next-line
import axios from "axios";
// eslint-disable-next-line
import { testdata } from "../../data/data";
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

const AddExpenseButton = styled.div`
  border: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);
  background-color: #183c56;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: fixed;
  bottom: 30px;
  left: 90%;
  margin-left: -30px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 24px;
  }
`;

function TripDetails(props) {
  const [trip, setTrip] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [id, setId] = useState();

  // eslint-disable-next-line
  const addExpense = () => {
    console.log("Add Expense Button clicked");
  };

  useEffect(() => {
    const id = props.match.params.id;
    setId(id);
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

        <AddExpenseButton onClick={event => addExpense()}>
          <i className="fas fa-plus fa-2x"></i>
        </AddExpenseButton>
      </>
    );
  }
}

export default TripDetails;
