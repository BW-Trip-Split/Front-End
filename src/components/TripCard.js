import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function TripCard(props) {
  const Card = styled.div`
    width: 25%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 1rem;
    box-shadow: 0 -1px 0 #d65a31, 0 0 5px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);

    @media (max-width: 1200px) {
      width: 40%;
    }

    @media (max-width: 800px) {
      width: 40%;
    }

    @media (max-width: 500px) {
      width: 90%;
    }

    img {
      width: 128px;
      height: auto;
    }

    h3 {
      margin: 0;
    }

    a {
      text-decoration: none;
    }
  `;

  const CardTop = styled.div`
  display: flex;
  flex-flow row;
  width: 100%;
  `;

  const CardInfo = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
  `;

  const CardImage = styled.div`
    margin-right: 20px;
  `;

  const TripTitle = styled.h3`
    text-align: center;
    margin: 0;
  `;

  const Buttons = styled.div`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-evenly;

    button {
      width: 100px;
      border: 0;
      padding: 5px;
      background-color: #d65a31;
    }
  `;

  console.log(props.tripID);

  return (
    <>
      <Card>
        <div>
          <Link to={`../tripdetails/${props.tripID}`}>
            <CardTop>
              <CardImage>
                <img src={props.trip.img}></img>
              </CardImage>
              <CardInfo>
                <TripTitle>{props.trip.name}</TripTitle>
                <span>Started: {props.trip.created}</span>
                <span>Members: {props.trip.members}</span>
                <span>Spent: {props.trip.amountspent}</span>
              </CardInfo>
            </CardTop>
          </Link>
        </div>
        <Buttons>
          <button>
            <i className="fas fa-edit"></i>
          </button>
          <button>
            <i className="fas fa-trash-alt"></i>
          </button>
        </Buttons>
      </Card>
    </>
  );
}

export default TripCard;
