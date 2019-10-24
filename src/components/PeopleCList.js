import React from 'react';
import Person from './Person';

function PeopleCList(props){
    return(
        <div>
            {/* <h1>PeopleList</h1> */}
            {console.log("PROPS.PEOPLE",props.people)}
            {props.people.map(person => {
                return(
                    <div key = {Math.random()}>
                        
                        <Person 
                            friend = {person} 
                            evenPayment = {props.evenPayment}
                            perPersonPayment = {props.perPersonPayment}
                            owed = {props.owed}
                            addingToggle = {props.addingToggle} 
                            ifEven = {props.ifEven}                           
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default PeopleCList;