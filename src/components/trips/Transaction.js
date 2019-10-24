import React from "react";
import styled from "styled-components";

const TransactionDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.24);

  width: 50%;
  padding: 10px 5%;

  @media (max-width: 1200px) {
    width: 50%;
    padding: 10px 5%;
  }

  @media (max-width: 900px) {
    width: 60%;
    padding: 10px 30px;
  }

  @media (max-width: 750px) {
    width: 100%;
    padding: 10px 20%;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 10px 30px;
  }
`;

const Info = styled.div`
  width: 100%;
  text-align: start;

  h5 {
    font-weight: 700;
    margin: 0;
  }

  span {
    font-size: 0.9rem;
    font-style: italic;
  }
`;

const Amount = styled.div`
  color: green;
  width: 10%;
  align-self: center;
  font-size: 1.1rem;
  font-weight: 600;
`;

function Transaction(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  const amount = formatter.format(props.transaction.total_expense_price);

  return (
    <TransactionDiv>
      <Info>
        <h5>{props.transaction.expense_name}</h5>
        <span>Expense made by {props.transaction.primary_paid}</span>
      </Info>
      <Amount>{amount}</Amount>
    </TransactionDiv>
  );
}

export default Transaction;
