import React, {useState} from 'react';
import { connect } from 'react-redux';
import PeopleCList from './PeopleCList';

function Calculator(props){
    

    let data = props.computationalData.filter(data => {
        if(data.people[0] === undefined){
            return null
        }else if(data.people[0].expenses[0] === undefined){
            return null
        }else{
        return data.people[0].expenses[0].trip_id === props.trip_id}
    })
    console.log(data[0].people.length)

    const [totalCosts, setTotalCosts] = useState(null)
    const [addingToggle, setAddingToggle] = useState(true)
    const [evenPayment, setEvenPayment] = useState(null)
    const [owed, setOwed] = useState([])

    const getTotalCosts = e => {
    
        let total = data.reduce((total, people) => {
          return total + parseFloat(people.people.reduce((total, person) => {
              return total + parseFloat(person.expenses.reduce((total, expense) => {
                  return total + parseFloat(expense.amount_paid)
              }, 0))
          }, 0));
        }, 0)
        setTotalCosts(total)
        setAddingToggle(true)
        calculateEvenPayment(total)
      }
      console.log("tc", totalCosts)

      const calculateEvenPayment = (total) => {
        console.log("calculateEP trigg")
        let peopleCount = data[0].people.length
        console.log("pc", peopleCount)
        let evenPaymentt = parseFloat(total / peopleCount)
        console.log("test", total)
        setEvenPayment(evenPaymentt.toFixed(2))
        createOwedList(evenPaymentt)
      }

      let people = data[0].people.map(person => {
          return{
              name: person.person_name,
              totalCosts: person.expenses.reduce((total, expense) => {
                return total + parseFloat(expense.amount_paid)
              }, 0)
          }
      })

      console.log("ep", evenPayment)
    
      const createOwedList = (evenPayment) => {
        let owed = people.filter(friend => {
          return (parseFloat(friend.totalCosts)) > evenPayment
        })
        console.log("owed", owed)
        let cumulativeOwed = owed.reduce((cumulativeOwed, friend) => {
          return parseFloat(cumulativeOwed) + (parseFloat(friend.totalCosts) - parseFloat(evenPayment))
        }, 0)
        console.log("cumulative", cumulativeOwed)
        let owedWithPercentage = owed.map(friend => {
          friend.percentageOwed = (
            ((parseFloat(friend.totalCosts)) - evenPayment) / cumulativeOwed
          )
          return friend
        })
        setOwed(owedWithPercentage)
      }
    console.log(owed)
    return(
        <div>
            <h1>Calc</h1>
            <button onClick = {() => props.setCalcToggle(false)}>Done</button>
            <button onClick = {() => {getTotalCosts()}}>Start</button>
            <PeopleCList 
                people = {people} 
                evenPayment = {evenPayment} 
                owed = {owed}
                addingToggle = {addingToggle}
             />

        </div>
    )
}

function mapStateToProps(state){
    return{
        computationalData: state.computationalData
    }
}

export default connect(mapStateToProps, {})(Calculator);