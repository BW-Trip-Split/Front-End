import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

function TripDetails(props) {
  const [trip, setTrip] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    // const id = 8;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setTrip(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  
  return (
    <>
      YOU ARE IN THE TRIP DETAILS
    </>
  );
}

export default TripDetails;
