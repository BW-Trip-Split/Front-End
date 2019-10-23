import React, { useState } from "react";
import { connect } from "react-redux";
import PeopleCList from "./PeopleCList";
import styled from "styled-components";

import "../styles/Calculator.scss";

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

const CalcWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
`;

function Calculator(props) {
  let data = props.computationalData.filter(data => {
    if (data.people[0] === undefined) {
      return null;
    } else if (data.people[0].expenses[0] === undefined) {
      return null;
    } else {
      return data.people[0].expenses[0].trip_id === props.trip_id;
    }
  });
  console.log(data[0].people.length);

  const [totalCosts, setTotalCosts] = useState(null);
  const [addingToggle, setAddingToggle] = useState(true);
  const [evenPayment, setEvenPayment] = useState(null);
  const [owed, setOwed] = useState([]);

  const getTotalCosts = e => {
    let total = data.reduce((total, people) => {
      return (
        total +
        parseFloat(
          people.people.reduce((total, person) => {
            return (
              total +
              parseFloat(
                person.expenses.reduce((total, expense) => {
                  return total + parseFloat(expense.amount_paid);
                }, 0)
              )
            );
          }, 0)
        )
      );
    }, 0);
    setTotalCosts(total);
    setAddingToggle(true);
    calculateEvenPayment(total);
  };
  console.log("tc", totalCosts);

  const calculateEvenPayment = total => {
    console.log("calculateEP trigg");
    let peopleCount = data[0].people.length;
    console.log("pc", peopleCount);
    let evenPaymentt = parseFloat(total / peopleCount);
    console.log("test", total);
    setEvenPayment(evenPaymentt.toFixed(2));
    createOwedList(evenPaymentt);
  };

  let people = data[0].people.map(person => {
    return {
      name: person.person_name,
      totalCosts: person.expenses.reduce((total, expense) => {
        return total + parseFloat(expense.amount_paid);
      }, 0)
    };
  });

  console.log("ep", evenPayment);

  const createOwedList = evenPayment => {
    let owed = people.filter(friend => {
      return parseFloat(friend.totalCosts) > evenPayment;
    });
    console.log("owed", owed);
    let cumulativeOwed = owed.reduce((cumulativeOwed, friend) => {
      return parseFloat(cumulativeOwed) + (parseFloat(friend.totalCosts) - parseFloat(evenPayment));
    }, 0);
    console.log("cumulative", cumulativeOwed);
    let owedWithPercentage = owed.map(friend => {
      friend.percentageOwed = (parseFloat(friend.totalCosts) - evenPayment) / cumulativeOwed;
      return friend;
    });
    setOwed(owedWithPercentage);
  };
  console.log(owed);

  return (
    <>
      <div className="calc" style={{ display: props.calcToggle ? "block" : "none" }}>
        <div className="calc-inner">
          <div className="form-top">
            <h1>Calculate Expenses</h1>
          </div>

          <div className="form-content">
            <button onClick={() => props.setCalcToggle(false)}>Done</button>
            <button
              onClick={() => {
                getTotalCosts();
              }}
            >
              Pay Evenly
            </button>
            <PeopleCList people={people} evenPayment={evenPayment} owed={owed} addingToggle={addingToggle} />
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    computationalData: state.computationalData
  };
}

export default connect(
  mapStateToProps,
  {}
)(Calculator);
