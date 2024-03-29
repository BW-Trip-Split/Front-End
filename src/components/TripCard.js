import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import "../styles/TripCard.scss";
import { deleteTrip } from "../actions/actions";

function CurrentTripCard(props) {

  const totalExpense = trip => {
    let total = 0;
    trip.trip.expense.forEach(expense => {
      total = total + expense.expense_price;
    });
    return total;
  };

  const editTrip = e => {
    console.log("EDIT TRIP EVENT", e);
    e.stopPropagation();
    e.preventDefault();

    console.log("EDIT TRIP BUTTON CLICKED");
  }

  const deleteTrip = e => {
    console.log("DELETE TRIP EVENT", props.trip.trip_id);
    e.stopPropagation();
    e.preventDefault();

    console.log("DELETE TRIP BUTTON CLICKED");

    console.log("delete props", props);
    props.deleteTrip(props.trip.trip_id);
  }

  console.log("TRIP CARD DATA", props.trip);

  return (
    <div className="card-container">
      <div className="trip-card current-trip-card">
        <div className="trip-img">
          <img style={{ height: "128px", width: "128px" }} src={props.trip.trip_img}></img>
        </div>
        <div className="trip-info">
          <h3>{props.trip.trip_name}</h3>
          <span>{props.trip.trip_date}</span>
          <span>{props.trip.people.length + 1} members</span>
          <br/>
          <span style={{color: "green"}}>${totalExpense(props)}</span>
        </div>
        <div className="trip-card-buttons">
          <button onClick={e => editTrip(e)}>
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={e => deleteTrip(e)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export function PastTripCard(props) {
  const totalExpense = trip => {
    let total = 0;
    trip.trip.expenses.forEach(expense => {
      total = total + expense.expense_amount;
    });
    return total;
  };

  return (
    <div className="card-container">
      <Card className="trip-card past-trip-card">
        <Card.Content>
          <Card.Header content={props.trip.trip_name} />
          <Card.Description content={`Total Expenses: $${totalExpense(props)}`} />
        </Card.Content>
        
      </Card>
    </div>
  );
}

function mapStateToProps() {
  return {};
}
export default connect(
  mapStateToProps,
  { deleteTrip }
)(CurrentTripCard);
