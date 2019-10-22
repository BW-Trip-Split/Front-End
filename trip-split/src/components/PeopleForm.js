import React, {useState} from 'react';
import { connect } from 'react-redux';
import { postTrip } from '../actions/actions';
import moment from "moment";
import {Form} from 'semantic-ui-react';
import '../styles/PeopleForm.scss';
import {Button} from './Buttons.js';

function PeopleForm(props){
    const [trip, setTrip] = useState("");
    const [people, setPeople] = useState(
        { 
            person1: '' , 
            person2: '' , 
            person3: '' , 
            person4: '' , 
            person5: '' 
        }
    )

    const handleChange = event => {
        setTrip(event.target.value);
    };
    
     const handlePeopleChange = event => {
        setPeople({...people, [event.target.name]: event.target.value});
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        
        let peoplesArray = [
            {people_name: people.person1},
            {people_name: people.person2},
            {people_name: people.person3},
            {people_name: people.person4},
            {people_name: people.person5}
        ]

        let filteredPeoplesArray = peoplesArray.filter(person => {
            return person.people_name !== "";
        })
        
        let tripObj = {
            trip_name: trip,
            trip_destination: "Planet Earth",
            trip_date: moment().format("MMM Do YY"), 
            trip_opened: true,
            peoples: filteredPeoplesArray
        }
        props.postTrip(tripObj)

        setPeople({person1: '', person2: '', person3:'', person4: '', person5: ''});
        setTrip("");
        props.history.push('/');
    }
    return (
        <div className="new-trip">
            <h1>New Trip</h1>
            <Form className="trip-form" onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Trip Name</label>
                    <input
                    placeholder="Trip Name"
                    name="trip"
                    value={trip}
                    onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                <label>Name 1</label>
                <input
                    placeholder="Name"
                    name="person1"
                    value={people.person1}
                    onChange={handlePeopleChange}
                />
                </Form.Field>

                <Form.Field>
                <label>Name 2</label>
                <input
                    placeholder="Name"
                    name="person2"
                    value={people.person2}
                    onChange={handlePeopleChange}
                />
                </Form.Field>

                <Form.Field>
                <label>Name 3</label>
                <input
                    placeholder="Name"
                    name="person3"
                    value={people.person3}
                    onChange={handlePeopleChange}
                />
                </Form.Field>

                <Form.Field>
                <label>Name 4</label>
                <input
                    placeholder="Name"
                    name="person4"
                    value={people.person4}
                    onChange={handlePeopleChange}
                />
                </Form.Field>
                
                <Form.Field>
                <label>Name 5</label>
                <input
                    placeholder="Name"
                    name="person5"
                    value={people.person5}
                    onChange={handlePeopleChange}
                />
                </Form.Field>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}
function mapStateToProps(){
    return {}
}
export default connect(mapStateToProps, {postTrip})(PeopleForm);





