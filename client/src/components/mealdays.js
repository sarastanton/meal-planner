import React from 'react'

const Mealdays = props => {
  // console.log(props.mealdays)

  if (props.mealdays === undefined) {
    console.log("not loaded yet")
  } else {
    console.log(props.mealdays[0].week_day)
  }

  // debugger
  if(props.mealdays === undefined) {
    return null
  } else {

      return (
        <div className="card">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th> Monday </th>
                <th> Tuesday </th>
                <th> Wednesday </th>
                <th> Thursday </th>
                <th> Friday </th>
                <th> Saturday </th>
                <th> Sunday </th>
              </tr>
            </thead>
      {/*  document.getElementsByClassName("breakfast")[0].children[0].parentElement.className */
      }
            <tbody>
              <tr className="breakfast">
                <td> Breakfast </td>
                <td> {props.mealdays[0].recipe.name} </td>
                <td> Tuesday Breakfast </td>
                <td> Wednesday Breakfast </td>
                <td> Thursday Breakfast </td>
                <td> Friday Breakfast </td>
                <td> Saturday Breakfast </td>
                <td> Sunday Breakfast </td>
              </tr>

              <tr className="lunch">
                <td> Lunch </td>
                <td> Monday Lunch </td>
                <td> Tuesday Lunch </td>
                <td> Wednesday Lunch </td>
                <td> Thursday Lunch </td>
                <td> Friday Lunch </td>
                <td> Saturday Lunch </td>
                <td> Sunday Lunch </td>
              </tr>

              <tr className="dinner">
                <td> Dinner </td>
                <td> Monday Dinner </td>
                <td> Tuesday Dinner </td>
                <td> Wednesday Dinner </td>
                <td> Thursday Dinner </td>
                <td> Friday Dinner </td>
                <td> Saturday Dinner </td>
                <td> Sunday Dinner </td>
              </tr>
            </tbody>
          </table>

        <p>this is props:
    {Object.keys(props.mealdays)}</p>

        </div>
      )
    }
}


export default Mealdays
