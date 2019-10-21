import React from "react";
import styled from "styled-components";

function Transaction(props) {
  const TransactionDiv = styled.div`
    width: 100%;
    display: flex;

    flex-flow: column;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24);
    padding: 10px;
    div {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
    }
  `;

  console.log(props.tripID);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });

  const amount = formatter.format(props.transaction.amount);

  return (
    <TransactionDiv>
      <div>
        <div>{props.transaction.title}</div>
        <div style={{color: "green"}}>{amount}</div>
      </div>
      <div>
        <div>{props.transaction.owner} shared with {props.transaction.shared.length} others.</div>
      </div>
    </TransactionDiv>
  );
}

export default Transaction;
