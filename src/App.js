import React from "react";
import { Route} from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { PrivateRoute } from "./utils/PrivateRoute";
import {
  register,
  login,
  getHome,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getTrips,
  postTrip,
  getTrip,
  postExpense,
  getTripsByUserId
} from "./actions/actions";
import "semantic-ui-css/semantic.min.css";
import PeopleForm from "./components/PeopleForm";
import LoginForm from "./components/LoginForm";
import Trip from "./components/Trip";
import TripsDashboard from "./components/TripsDashboard";
import Navigation from "./components/Navigation";

function App(props) {
  const loginTest = () => {
    let credss = {
      email: "test@email.com",
      password: "123456"
    };
    props.login(credss);
  };

  const registerTest = () => {
    let creds = {
      name: "John Doe",
      email: "test@email.com",
      password: "123456",
      role: "user"
    };
    props.register(creds);
  };

  const getTest = () => {
    props.getHome();
  };

  const getUsersTest = () => {
    props.getUsers();
  };

  const getUserTest = () => {
    props.getUser(2);
  };

  const updateUserTest = () => {
    let update = {
      email: "update@test.com"
    };
    props.updateUser(2, update);
  };

  const deleteUserTest = () => {
    props.deleteUser(1);
  };

  const getTripsTest = () => {
    props.getTrips();
  };

  // const getTripsByUserIdTest = () => {
  //   props.getTripsByUserId(1)
  // }

  const postTripTest = () => {
    let tripObj = {
      trip_name: "Disney Park",
      trip_destination: "london",
      trip_date: "20-01-2019",
      trip_opened: true,
      peoples: [{ people_name: "tayo alade" }, { people_name: "tayo jojo" }]
    };
    props.postTrip(tripObj);
  };

  const getTripTest = () => {
    props.getTrip(4);
  };

  const postExpenseTest = () => {
    let expenseObj = {
      expense_title: "Orange",
      expense_price: 5,
      trip_id: 1,
      expense_members: [{ expense_amount_paid: 3, people_id: 1 }, { expense_amount_paid: 2, people_id: 2 }]
    };
    props.postExpense(expenseObj);
  };

  const getTripsByUserIdTest = () => {
    const user_id = localStorage.getItem("user_id");
    props.getTripsByUserId(user_id);
  };

  const logOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    // window.location.reload();
    this.props.history.push('/login')
  };

  return (
    <div className="App">
      {/* <h1>Never Worry About Not Getting Paid Back</h1> */}
      <Navigation />

      <Route path="/login" component={LoginForm} />
      <Route path="/trip/:id" component={Trip} />
      <Route path="/people-form" component={PeopleForm} />
      <PrivateRoute exact path="/" component={TripsDashboard} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user_id: state.user_id
  };
}

export default connect(
  mapStateToProps,
  {
    register,
    login,
    getHome,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    getTrips,
    postTrip,
    getTrip,
    postExpense,
    getTripsByUserId
  }
)(App);

// , getTripsByUserId
