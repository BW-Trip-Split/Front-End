import React from 'react';
import {Card} from 'semantic-ui-react';
import '../styles/TripCard.scss';

export function CurrentTripCard(props){

    const totalExpense = trip => {
        let total = 0;
        trip.trip.expense.forEach(expense => {
            total = total + expense.expense_price;
        });
        return total;
    }

    return(
        <div className="card-container">
            <Card className="trip-card current-trip-card">
                <Card.Content>
                    <Card.Header content={props.trip.trip_name} />
                    <Card.Description content={`Total Expenses: $${totalExpense(props)}`}/>
                </Card.Content>
            </Card>
        </div>
    )
}

export function PastTripCard(props){

    const totalExpense = trip => {
        let total = 0;
        trip.trip.expenses.forEach(expense => {
            total = total + expense.expense_amount;
        });
        return total;
    }

    return(
        <div className="card-container">
            <Card className="trip-card past-trip-card">
                <Card.Content>
                    <Card.Header content={props.trip.trip_name} />
                    <Card.Description content={`Total Expenses: $${totalExpense(props)}`}/>
                </Card.Content>
            </Card>
        </div>
    )
}