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
          <table className="meals">
            <thead>
              <tr>
                <th> </th>
                <th> Breakfast </th>
                <th> Lunch </th>
                <th> Dinner </th>
              </tr>
            </thead>
      {/*  document.getElementsByClassName("breakfast")[0].children[0].parentElement.className */
      }
            <tbody>
              <tr className="mon">
                <td> <strong> Monday </strong> </td>
                <td> {props.mealdays[0].recipe.name} </td>
                <td> {props.mealdays[1].recipe.name} </td>
                <td> {props.mealdays[2].recipe.name} </td>
              </tr>

              <tr className="tues">
                <td> <strong> Tuesday </strong> </td>
                <td> {props.mealdays[3].recipe.name} </td>
                <td> {props.mealdays[4].recipe.name} </td>
                <td> {props.mealdays[5].recipe.name} </td>
              </tr>

              <tr className="wed">
                <td> <strong> Wednesday </strong> </td>
                <td> {props.mealdays[6].recipe.name} </td>
                <td> {props.mealdays[7].recipe.name} </td>
                <td> {props.mealdays[8].recipe.name} </td>
              </tr>

              <tr className="thurs">
                <td> <strong> Thursday </strong> </td>
                <td> {props.mealdays[9].recipe.name} </td>
                <td> {props.mealdays[10].recipe.name} </td>
                <td> {props.mealdays[11].recipe.name} </td>
              </tr>

              <tr className="fri">
                <td> <strong> Friday </strong> </td>
                <td> {props.mealdays[12].recipe.name} </td>
                <td> {props.mealdays[13].recipe.name} </td>
                <td> {props.mealdays[14].recipe.name} </td>
              </tr>

              <tr className="sat">
                <td> <strong> Saturday </strong> </td>
                <td> {props.mealdays[15].recipe.name} </td>
                <td> {props.mealdays[16].recipe.name} </td>
                <td> {props.mealdays[17].recipe.name} </td>
              </tr>

              <tr className="sun">
                <td> <strong> Sunday </strong> </td>
                <td> {props.mealdays[18].recipe.name} </td>
                <td> {props.mealdays[19].recipe.name} </td>
                <td> {props.mealdays[20].recipe.name} </td>
              </tr>

            </tbody>
          </table>

        </div>
      )
    }
}


export default Mealdays
