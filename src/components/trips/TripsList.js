import React, { useState, useEffect } from "react";
import styled from "styled-components";
// eslint-disable-next-line
import axios from "axios";
import TripCard from "./TripCard";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";

//https://tripsplitr.herokuapp.com/

const HeaderDiv = styled.div`
  background-color: #e6e2ff;
  padding: 10px 30px;
  color: #333333;
  text-align: start;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
  }
`;

const TripListDiv = styled.div`
  margin: 1rem auto;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const AddTripButton = styled.button`
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

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const PopupInner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  padding: 1%;
  border-radius: 4px;
  background: white;

  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;

  h3 {
    text-align: center;
    margin: 0;
    font-weight: 600;
    font-size: 1.4rem;
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  border: 0;
  // padding: 5px 0;
  margin: 3px 0;
  color: #f6bd60;
  background-color: #ffffff;

  :hover {
    cursor: pointer;
  }
`;

const PopupTop = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 40px;
`;

const PopupForm = styled.div`
  display: flex;
  flex-flow: column;

  form {
    display: flex;
    flex-flow: column;
  }
`;

function TripsList() {
  const [currentTrips, setCurrentTrips] = useState([]);
  // eslint-disable-next-line
  const [pastTrips, setPastTrips] = useState([]);
  const [displayForm, setDisplay] = useState(false);

  // eslint-disable-next-line
  const deleteTrip = () => {};

  // eslint-disable-next-line
  const editTrip = () => {};

  // eslint-disable-next-line
  const toggleTrip = () => {
    console.log("Add Trip Button clicked");
    setDisplay(!displayForm);
  };

  const addNewTrip = trip => {
    console.log("addNewTrip triggered", trip);

    toggleTrip();
    // ADD TRIP TO SERVER
    axios
      .post("https://tripsplitr.herokuapp.com/trips", {
        name: trip.name,
        date: trip.date,
        img: trip.img,
        complete: 0,
      })
      .then(function(response) {
        getTripData();
      })
      .catch(function(error) {
        console.log(error);
      });

    // const newTrip = {
    //   name: member.name,
    //   date: member.email,
    //   img: member.role
    // };
    // setTeam([...team, newMember]);
  };

  const getTripData = () => {
    axios
      .get("https://tripsplitr.herokuapp.com/trips")
      .then(response => {
        setCurrentTrips(response.data);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };
  useEffect(() => {
    getTripData();
  }, []);

  return (
    <>
      <HeaderDiv>
        <h2>Current Trips</h2>
      </HeaderDiv>
      <CurrentTrips currentTrips={currentTrips} />
      {/* <HeaderDiv>
        <h2>Past Trips</h2>
      </HeaderDiv>

      <PastTrips pastTrips={pastTrips} /> */}
      <AddTripButton onClick={event => toggleTrip()}>
        <i className="fas fa-plus fa-2x"></i>
      </AddTripButton>
      <TripForm displayForm={displayForm} toggleTrip={toggleTrip} addNewTrip={addNewTrip} />
    </>
  );
}

//TRIPDETAILS
function CurrentTrips(props) {
  return (
    <>
      <TripListDiv>
        {props.currentTrips.map((element, index) => (
          <TripCard key={index} trip={element} isPast={false} />
        ))}
      </TripListDiv>
    </>
  );
}

function PastTrips(props) {
  return (
    <>
      <TripListDiv>
        {props.pastTrips.map((element, index) => (
          <TripCard key={index} trip={element} isPast={true} />
        ))}
      </TripListDiv>
    </>
  );
}

// function TripForm(props) {
//   return (
//     <Popup style={{ display: props.displayForm ? "block" : "none" }}>
//       <Popup_inner>
//         <PopupTop>
//           <h3>Add A Trip</h3>
//           <button onClick={event => props.addTrip()}><i class="far fa-times-circle fa-2x"></i></button>
//         </PopupTop>
//       </Popup_inner>
//     </Popup>
//   );
// }

// ************* ADD TRIP FORM ****************//
function TripForm(props) {
  const [newTrip, setNewTrip] = useState({
    name: "",
    date: "",
    img: ""
  });

  const changeHandler = event => {
    setNewTrip({ ...newTrip, [event.target.name]: event.target.value });
  };

  const submitForm = e => {
    e.preventDefault();

    if (!props.tripToEdit) {
      console.log("Sending newTrip to addNewTrip", newTrip);
      if (newTrip.name !== "" && newTrip.date !== "" && newTrip.img !== "") {
        props.addNewTrip(newTrip);
        setNewTrip({ name: "", date: "", img: "" });
      } else {
        //warn user to select all fields
      }
    } else if (props.tripToEdit) {
      console.log("editing instead");
      props.editTrip(newTrip);
      setNewTrip({ name: "", date: "", img: "" });
    }
  };

  return (
    <>
      <Popup style={{ display: props.displayForm ? "block" : "none" }}>
        <PopupInner>
          <PopupTop>
            <h3>Add A Trip</h3>
            <CloseButton onClick={event => props.toggleTrip()}>
              <i className="far fa-times-circle fa-2x"></i>
            </CloseButton>
          </PopupTop>

          <PopupForm>
            <form onSubmit={submitForm}>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Trip Name"
                value={newTrip.name}
                onChange={changeHandler}
              />

              <input
                name="date"
                id="date"
                type="text"
                placeholder="Date (MM/DD/YYYY)"
                value={newTrip.date}
                onChange={changeHandler}
              />

              <input
                name="img"
                id="img"
                type="text"
                placeholder="Image URL"
                value={newTrip.img}
                onChange={changeHandler}
              />

              <button type="submit">Submit!</button>
            </form>
          </PopupForm>
        </PopupInner>
      </Popup>

      {/* CHECK TO SEE IF USERS EXIST BEFORE PUTTING AN H2 */}
      {/* {user && user.length ? <h2>Users</h2> : <></>}
      <div className="users-list">
        {user.map((element, index) => (
          <Users key={index} user={element} />
        ))}
      </div> */}
    </>
  );
}

export default TripsList;
