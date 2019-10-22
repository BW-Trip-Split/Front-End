import { string, number, bool, array } from "prop-types";

// //Presentational table
// [
//     {
//         trip_name: string,
//         trip_id: id,
//         expenses: [
//             {
//                 expense_name: string,
//                 expense_id: id,
//                 people: [
//                     {
//                         person_id: id, 
//                         amount_paid: number
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// //Computational table
// [
//     {
//         person_name: string,
//         person_id: id,
//         expenses: [
//             {
//                 expense_id: id,
//                 amount_paid: number
//             }
//         ]
//     }
// ]


// [
//     {
//         trip_name: string,
//         trip_id: id,
//         trip_closed: Boolean,
//         expense_name: string,
//         expense_id: id,
//         expense_amount: number,
//         person_name: string,
//         person_id: id
//     }
// ]


// expense[
//     0{
//     expense_id
//     expense_title
//     expense_price
//     expense_members[
//       {
//         person_id
//         person_amount_paid
//         expense_id
//       },
//       {
//         person_id
//         person_amount_paid
//         expense_id
//       }
//      ]
//     },
//     1{
//       expense_id
//       expense_title
//       expense_price
//       expense_members[
//         {
//           person_id
//           person_amount_paid
//           expense_id
//         },
//         {
//           person_id
//           person_amount_paid
//           expense_id
//         }
//        ]
//       }
  
//   ] 



[
    {
        person_name: string,
        person_id: id,
        expenses: [
            {
                expense_id: id,
                trip_id: id,
                amount_paid: number
            }
        ]
    }
]


trips = [
    {
        trip_id: id,
        trip_name: string,
        trip_no_of_people: number,
        trip_opened: bool,
        user_id: id,
        trip_date: string,
        trip_destination: string,
        people: [
            {
                id: id,
                people_name: string,
                trip_id: id
            },
        ],
        expense: [
            {
                expense_price: number,
                expense_title: string,
                id: id,
                trip_id: number,
                memebers: [
                    {
                        expense_amount_paid: number,
                        expense_id: id,
                        people_id: id
                    },
                ]
            }
        ]
    }
]

array.reduce(function(accumulator, element){
    return accumulator + element.key;
}, 0);

array.filter(function(element){
    return element >5;
})

const product = products.filter(product => product.price < 10).reduce((highest, product) => {
    if (highest.price > product.price) {
      return highest;
    }
    return product;
  }, { price: 0 });



// function frankenstein(trips){
//     let people = trips.map(trip => {
//         return {
//             people: trip.people.map(person => {
//                 return {
//                     person_name: person.people_name,
//                     person_id: person.id,
//                     expenses: trip.expense.map(expense => {
//                         return{
//                             expense_id: expense.id,
//                             trip_id: trip.trip_id,
//                             amount_paid: expense.memebers.filter(member => {
//                                 return member.people.id === person.id
//                             }).reduce((total, memeber) => {
//                                 return total + memeber.expense_amount_paid
//                             }, 0)
//                         }
//                     })  
//                 }
//             })
//         }     
//     })
//     return people
// }


// return {
//     trip.expenses.map(expense => {
        
//     })
// }

// frankensteinArr = frankenstein(trip)

// [
//     {
//         person_name: string,
//         person_id: id,
//         expenses: [
//             {
//                 expense_id: id,
//                 trip_id: id,
//                 amount_paid: number
//             }
//         ]
//     }
// ]

// function frankenstein(trips){
//     let people = trips.map(trip => {
//         return {
//             people: trip.people.map(person => {
//                 return {
//                     person_name: person.people_name,
//                     person_id: person.id,
//                     expenses: trip.expense.map(expense => {
//                         return{
//                             expense_id: expense.id,
//                             trip_id: trip.trip_id,
//                             amount_paid: expense.memebers.filter(member => {
//                                 return member.people_id === person.id
//                             }).reduce((total, memeber) => {
//                                 return total + memeber.expense_amount_paid
//                             }, 0)
//                         }
//                     })  
//                 }
//             }
//         )}     
//     })
//     return people
// }