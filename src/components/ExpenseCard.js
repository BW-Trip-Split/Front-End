import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../styles/ExpenseCard.scss";

function ExpenseCard(props) {
  const [trip, setTrip] = useState(false);
  useEffect(() => {
    setTrip(props.trip);
  }, [props.trip, props.getTripTrigger, props.gotTripsTrigger]);

  const deleteExpense = e => {
    console.log("DELETE EXPENSE EVENT", e);
    e.stopPropagation();
    e.preventDefault();

    console.log("DELETE EXPENSE BUTTON CLICKED");
  };

  const editExpense = e => {
    console.log("EDIT EXPENSE EVENT", e);
    e.stopPropagation();
    e.preventDefault();

    console.log("EDIT EXPENSE BUTTON CLICKED");
  };

  return trip.trip_id ? (
    <>
      <div className="expense-card-wrap">
        <div className="expense-card">
          <div className="expense-card-info">
            <h4>{props.expense.expense_title}</h4>
            <h5>Shared with {props.expense.memebers.length} members</h5>
          </div>

          <span>
            $
            {props.expense.memebers.reduce(function(total, member) {
              return total + member.expense_amount_paid;
            }, 0)}
          </span>
        </div>
        <div className="expense-buttons">
        
          <button onClick={e => deleteExpense(e)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

function mapStateToProps(state) {
  return {
    getTripsTrigger: state.getTripsTrigger,
    gotTripsTrigger: state.gotTripsTrigger
  };
}

export default connect(
  mapStateToProps,
  {}
)(ExpenseCard);
