import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../styles/ExpenseCard.scss";

function ExpenseCard(props) {
  const [trip, setTrip] = useState(false);
  useEffect(() => {
    setTrip(props.trip);
  }, [props.trip, props.getTripTrigger, props.gotTripsTrigger]);

  return trip.trip_id ? (
    <>
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
