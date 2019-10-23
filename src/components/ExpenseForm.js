import React, { useState } from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";

import { Button } from "./Buttons.js";
import { postExpense } from "../actions/actions";
import "../styles/ExpenseForm.scss";

function ExpenseForm(props) {
  const [amountsPaid, setAmountsPaid] = useState({
    expenseName: "",
    amount_paid1: "",
    amount_paid2: "",
    amount_paid3: "",
    amount_paid4: "",
    amount_paid5: ""
  });

  function onChange(event) {
    setAmountsPaid({ ...amountsPaid, [event.target.name]: event.target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    setAmountsPaid({
      expenseName: "",
      amount_paid1: "",
      amount_paid2: "",
      amount_paid3: "",
      amount_paid4: "",
      amount_paid5: ""
    });
    let amountsPaidArr = [
      { paid: amountsPaid.amount_paid1 ? parseFloat(amountsPaid.amount_paid1) : 0 },
      { paid: amountsPaid.amount_paid2 ? parseFloat(amountsPaid.amount_paid2) : 0 },
      { paid: amountsPaid.amount_paid3 ? parseFloat(amountsPaid.amount_paid3) : 0 },
      { paid: amountsPaid.amount_paid4 ? parseFloat(amountsPaid.amount_paid4) : 0 },
      { paid: amountsPaid.amount_paid5 ? parseFloat(amountsPaid.amount_paid5) : 0 }
    ];
    let filteredAmountsPaidArr = [];
    for (let i = 0; i < props.trip.people.length; i++) {
      filteredAmountsPaidArr.push({
        expense_amount_paid: amountsPaidArr[i].paid,
        people_id: props.trip.people[i].id
      });
    }
    let expenseObj = {
      expense_title: amountsPaid.expenseName,
      expense_price: filteredAmountsPaidArr.reduce(function(accumulator, cost) {
        return accumulator + cost.expense_amount_paid;
      }, 0),
      trip_id: props.trip.trip_id,
      expense_members: filteredAmountsPaidArr
    };
    props.postExpense(expenseObj);
    setAmountsPaid({
      expenseName: "",
      amount_paid1: "",
      amount_paid2: "",
      amount_paid3: "",
      amount_paid4: "",
      amount_paid5: ""
    });
  }

  
  console.log("toggleform", props.toggleForm);

  return (
    <div className="new-expense" style={{ display: props.formToggle ? "block" : "none" }}>
      <div className="new-expense-inner">
      <div className="form-top">
          <h1>New Trip</h1>
        </div>

        <div className="form-content">

        <Form className="expense-form">
          <Form.Field className="expense-input">
            <label>Expense Name</label>
            <input
              placeholder="Expense"
              value={amountsPaid.expenseName}
              name="expenseName"
              onChange={onChange}
              type="text"
            />
          </Form.Field>

          {props.trip.people[0] ? (
            <Form.Field className="expense-input">
              <label>{props.trip.people[0].people_name}</label>
              <input
                placeholder="Amount"
                value={amountsPaid.amount_paid1}
                name="amount_paid1"
                onChange={onChange}
                type="number"
              />
            </Form.Field>
          ) : (
            <></>
          )}

          {props.trip.people[1] ? (
            <Form.Field className="expense-input">
              <label>{props.trip.people[1].people_name}</label>
              <input
                placeholder="Amount"
                value={amountsPaid.amount_paid2}
                name="amount_paid2"
                onChange={onChange}
                type="number"
              />
            </Form.Field>
          ) : (
            <></>
          )}

          {props.trip.people[2] ? (
            <Form.Field className="expense-input">
              <label>{props.trip.people[2].people_name}</label>
              <input
                placeholder="Amount"
                value={amountsPaid.amount_paid3}
                name="amount_paid3"
                onChange={onChange}
                type="number"
              />
            </Form.Field>
          ) : (
            <></>
          )}

          {props.trip.people[3] ? (
            <Form.Field className="expense-input">
              <label>{props.trip.people[3].people_name}</label>
              <input
                placeholder="Amount"
                value={amountsPaid.amount_paid4}
                name="amount_paid4"
                onChange={onChange}
                type="number"
              />
            </Form.Field>
          ) : (
            <></>
          )}

          {props.trip.people[4] ? (
            <Form.Field className="expense-input">
              <label>{props.trip.people[4].people_name}</label>
              <input
                placeholder="Amount"
                value={amountsPaid.amount_paid5}
                name="amount_paid5"
                onChange={onChange}
                type="number"
              />
            </Form.Field>
          ) : (
            <></>
          )}

          <Button
            type="reset"
            onClick={event => {
              props.setFormToggle(false);
              onSubmit(event);
            }}
          >
            Save Expense
          </Button>
        </Form>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  // console.log(state)
  return {};
}

export default connect(
  mapStateToProps,
  { postExpense }
)(ExpenseForm);
