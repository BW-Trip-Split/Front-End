import React from 'react';
import Person from './Person';

function PeopleCList(props){
    return(
        <div>
            <h1>PeopleList</h1>
            {props.people.map(person => {
                return(
                    <div key = {Math.random()}>
                        <Person 
                            friend = {person} 
                            evenPayment = {props.evenPayment}
                            owed = {props.owed}
                            addingToggle = {props.addingToggle}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default PeopleCList;