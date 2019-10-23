import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";

import { Button } from "./Buttons.js";

import { connect } from "react-redux";
import { getTripsByUserId } from "../actions/actions";
import "../styles/Trip.scss";

import ExpenseCard from "./ExpenseCard";
import Calculator from "./Calculator";

import styled from "styled-components";

//STYLE
const HeaderDiv = styled.div`
  background-color: #e6e2ff;
  padding: 10px 30px;
  color: #333333;
  text-align: start;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  h2 {
    margin: 0;
    font-size: 1.4rem;
    text-align: center;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const AddExpenseButton = styled.button`
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

const CalculateButton = styled.button`
  border: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);
  background-color: #183c56;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: fixed;
  bottom: 30px;
  left: 30px;
  // margin-left: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  i {
    font-size: 24px;
  }
`;

function Trip(props) {
  const [formToggle, setFormToggle] = useState(false);
  const [calcToggle, setCalcToggle] = useState(false);
  // const [trip, setTrip] = useState({
  //   expense: [],
  //   trip_id: false
  // })

  // useEffect(() => {
  //   function getTripData() {
  //     const id = props.match.params.id;
  //     const tripObj = props.location.state.trip;
  //     setTrip(tripObj);
  //   }
  //   getTripData()}, [props.match.params.id, props.location.state])

  const toggleExpenseForm = () => {
    console.log("Add Expense Button clicked");
    setFormToggle(!formToggle);
  };

  const toggleCalcForm = () => {
    console.log("Calculator Button clicked");
    setCalcToggle(!calcToggle);
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    props.getTripsByUserId(user_id);
  }, [props.getTripsTrigger]);
  // console.log("trip", trip);

  let trip =
    props.openTrips[0].trip_date !== ""
      ? props.openTrips.filter(trip => {
          return trip.trip_id === parseFloat(props.match.params.id);
        })[0]
      : props.openTrips[0];

  return (
    <>
      <HeaderDiv>
        <div>
          <h2>Expenses</h2>
        </div>
        <div>
          <h3>{trip.trip_name}</h3>
        </div>
      </HeaderDiv>
      <div className="trip-container">
        
        <ExpenseForm
          toggleExpenseForm={toggleExpenseForm}
          formToggle={formToggle}
          setFormToggle={setFormToggle}
          trip={trip}
        />
        <Calculator
          toggleCalcForm={toggleCalcForm}
          calcToggle={calcToggle}
          setCalcToggle={setCalcToggle}
          trip_id={parseFloat(props.match.params.id)}
        />

        <div className="expense-cards">
          {trip.expense.map(expense => {
            return <ExpenseCard expense={expense} trip={trip} />;
          })}
        </div>

        <AddExpenseButton onClick={() => toggleExpenseForm()}>
          <i className="fas fa-plus fa-2x"></i>
        </AddExpenseButton>

        <div className="calculate-section">
          <CalculateButton onClick={() => setCalcToggle(true)}>
            <i className="fas fa-calculator fa-2x"></i>
          </CalculateButton>
        </div>
      </div>
    </>
  );
}

//   return formToggle ? (
//     <ExpenseForm setFormToggle={setFormToggle} trip={trip} />
//   ) : calcToggle ? (
//     <Calculator setCalcToggle={setCalcToggle} trip_id={parseFloat(props.match.params.id)} />
//   ) : (
//     <>
//       <HeaderDiv>
//         <div>
//           <h2>Expenses</h2>
//         </div>
//         <div>
//           <h3>{trip.trip_name}</h3>
//         </div>
//       </HeaderDiv>
//       <div className="trip-container">
//         <div className="expense-cards">
//           {trip.expense.map(expense => {
//             return <ExpenseCard expense={expense} trip={trip} />;
//           })}
//         </div>

//         <AddExpenseButton onClick={() => setFormToggle(true)}>
//           <i className="fas fa-plus fa-2x"></i>
//         </AddExpenseButton>

//         <div className="calculate-section">
//           <CalculateButton onClick={() => setCalcToggle(true)}>
//             <i className="fas fa-calculator fa-2x"></i>
//           </CalculateButton>
//         </div>
//       </div>
//     </>
//   );
// }

function mapStateToProps(state) {
  return {
    getTripsTrigger: state.getTripsTrigger,
    openTrips: state.openTrips
  };
}

export default connect(
  mapStateToProps,
  { getTripsByUserId }
)(Trip);
