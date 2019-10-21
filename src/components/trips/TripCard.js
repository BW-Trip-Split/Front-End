import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function TripCard(props) {
  const Card = styled.div`
    width: 35%;
    background-color: #ffffff;
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
    margin: 1rem;
    box-shadow: 0 1px 6px -2px #000;

    @media (max-width: 1200px) {
      width: 40%;
    }

    @media (max-width: 800px) {
      width: 70%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    img {
      max-width: 128px;
      margin-right: 10px;
      height: 128px;
    }

    h3 {
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: black;
    }

    span {
      font-size: 0.8rem;
    }
  `;

  const CardInfo = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const TripTitle = styled.h3`
    text-align: center;
    margin: 0;
  `;

  const Buttons = styled.div`
    padding: 10px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    button {
      border: 0;
      padding: 5px 0;
      color: #d65a31;
      background-color: #ffffff;

      :hover {
        cursor: pointer;
      }
    }
  `;

  console.log(props.tripID);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  const amount = formatter.format(props.trip.amountspent);

  if (!props.isPast) {
    return (
      <Card>
        <img src={props.trip.img} />
        <CardInfo>
          <Link to={`trips/${props.tripID}`}>
            <TripTitle>{props.trip.name}</TripTitle>
          </Link>
          <span>Since {props.trip.created}</span>
          <span>{props.trip.members} people</span>
          <span style={{ color: "green" }}>{amount} spent</span>
        </CardInfo>
        <Buttons>
          <button>
            <i className="fas fa-edit"></i>
          </button>
          <button alt="Delete Trip">
            <i className="fas fa-trash-alt"></i>
          </button>
        </Buttons>
      </Card>
    );
  }
}

export default TripCard;
