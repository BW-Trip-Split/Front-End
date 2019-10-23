import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';

import {Button} from './Buttons.js';

import { connect } from 'react-redux';
import { getTripsByUserId } from '../actions/actions';

import ExpenseCard from './ExpenseCard';
import Calculator from './Calculator';


//STYLE

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

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    props.getTripsByUserId(user_id)
  }, [props.getTripsTrigger])
  // console.log("trip", trip);

  let trip = (props.openTrips[0].trip_date !== "" ? props.openTrips.filter(trip => {
    return trip.trip_id === parseFloat(props.match.params.id)
  })[0] : props.openTrips[0])

  return (
      (formToggle 
        ? (<ExpenseForm setFormToggle={setFormToggle} trip={trip}/>) 
        :( (calcToggle 
            ? <Calculator setCalcToggle = {setCalcToggle} trip_id = {parseFloat(props.match.params.id)} />
            :<div className="trip-container">
              <h1>{trip.trip_name}</h1>
              <div className="expense-section">
                <Button onClick={() => setFormToggle(true)}><h2>New Expense</h2></Button>
              </div>
              
              <div className="calculate-section">
                <Button onClick = {() => setCalcToggle(true)}>Calculate Total Expenses</Button>
              </div>
              <div className="expense-cards">
              {trip.expense.map(expense => {
                return(
                  <ExpenseCard expense = {expense} trip = {trip}/>
                )
              })}
            </div>
          </div>)
        )
      )
  )
 
}



function mapStateToProps(state){
  return {
    getTripsTrigger: state.getTripsTrigger,
    openTrips: state.openTrips
  }
}

export default connect(mapStateToProps, {getTripsByUserId})(Trip);

