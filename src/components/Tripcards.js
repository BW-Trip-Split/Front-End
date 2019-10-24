import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";

const Card = styled.div`
  width: 55%;
  background-color: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  margin: 1rem;
  box-shadow: 0 1px 6px -2px #000;
  // max-height: 128px;

  img {
    max-width: 256px;
    margin-right: 10px;
    height: 256px;
    display: block;
  }

  span {
    font-size: 1.1rem;
  }

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 85%;
  }

  @media (max-width: 750px) {
    width: 85%;

    img {
      max-width: 128px;
      height: 128px;
    }
    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    img {
      max-width: 128px;
      height: 128px;
    }
  }

  h3 {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: black;
    margin: 0;
    padding: 0;
    display: flex;

    width: 100%;
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
  font-weight: 600;
  font-size: 1.2rem;
`;

const Buttons = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;

  button {
    border: 0;
    // padding: 5px 0;
    margin: 5px 0;
    color: #f6bd60;
    background-color: #ffffff;

    :hover {
      cursor: pointer;
    }
  }
`;

const PastCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  margin: 0.75rem 1rem;
  box-shadow: 0 1px 6px -2px #000;
  // max-height: 128px;

  @media (max-width: 1200px) {
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 500px) {
  }

  img {
    max-width: 64px;
    margin-right: 10px;
    height: 64px;
    display: block;
  }

  h3 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 0.8rem;
  }
`;

function TripCard(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  const totalExpense = trip => {
    let total = 0;
    trip.trip.expense.forEach(expense => {
        total = total + expense.expense_price;
    });
    return total;
}

  const amount = formatter.format(props.trip.base_cost);

  if (!props.isPast) {
    return (
      <Card>
        <Link to={{ pathname: `trips/${props.trip.id}`, state: { name: "bar" } }}>
          <img src={props.trip.img} alt={props.trip.title} />

          <CardInfo>
            <TripTitle>{props.trip.name}</TripTitle>
            <span>
              Started <TimeAgo date={props.trip.date} />
            </span>
            <span>{props.trip.members} people</span>
            <span style={{ color: "green" }}>{amount} spent</span>
          </CardInfo>
        </Link>
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
  } else if (props.isPast) {
    return (
      <PastCard>
        <Link to={`trips/${props.tripID}`}>
          <img src={props.trip.img} alt={props.trip.title} />
          <CardInfo>
            <TripTitle>{props.trip.name}</TripTitle>
            <span>{props.trip.date}</span>
          </CardInfo>
          <span style={{ color: "green", paddingRight: "1rem" }}>{amount}</span>
        </Link>
      </PastCard>
    );
  }
}

export default TripCard;
