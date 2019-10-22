import React from "react";
import styled from "styled-components";

const TransactionDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24);

    width: 100%;
    padding: 10px 30px;

    div{
      // border: 1px solid red;
    }
    
  `;

  const Info = styled.div`
    width: 100%;
    text-align: start;


    h5 {
      font-weight: 700;
      margin: 0;
    }

    span{
      font-size: .9rem;
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
