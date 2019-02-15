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
                <td> <strong> Breakfast </strong> </td>
                <td> {props.mealdays[0].recipe.name} </td>
                <td> {props.mealdays[3].recipe.name} </td>
                <td> {props.mealdays[6].recipe.name} </td>
                <td> {props.mealdays[9].recipe.name} </td>
                <td> {props.mealdays[12].recipe.name} </td>
                <td> {props.mealdays[15].recipe.name} </td>
                <td> {props.mealdays[18].recipe.name} </td>
              </tr>

              <tr className="lunch">
                <td> <strong> Lunch </strong> </td>
                <td> {props.mealdays[1].recipe.name} </td>
                <td> {props.mealdays[4].recipe.name} </td>
                <td> {props.mealdays[7].recipe.name} </td>
                <td> {props.mealdays[10].recipe.name} </td>
                <td> {props.mealdays[13].recipe.name} </td>
                <td> {props.mealdays[16].recipe.name} </td>
                <td> {props.mealdays[19].recipe.name} </td>
              </tr>

              <tr className="dinner">
                <td> <strong> Dinner </strong> </td>
                <td> {props.mealdays[2].recipe.name} </td>
                <td> {props.mealdays[5].recipe.name} </td>
                <td> {props.mealdays[8].recipe.name} </td>
                <td> {props.mealdays[11].recipe.name} </td>
                <td> {props.mealdays[14].recipe.name} </td>
                <td> {props.mealdays[17].recipe.name} </td>
                <td> {props.mealdays[20].recipe.name} </td>
              </tr>
            </tbody>
          </table>

        </div>
      )
    }
}


export default Mealdays
