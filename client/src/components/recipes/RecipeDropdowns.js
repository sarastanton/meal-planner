import React from 'react'

const RecipeDropdowns = (props) => {
  return (
    <div className="frame">
      <table className="meals">
        <thead>
          <tr className="meal-headers">
            <th> </th>
            <th> Breakfast </th>
            <th> Lunch </th>
            <th> Dinner </th>
          </tr>
        </thead>

        <tbody>
        {props.mealdays.map(meal =>
          <tr className={meal[0].toLowerCase().slice(0,3)}>
            <td className="day-header"> {meal[0]} </td>
            <td data-id={meal[1].id}>
              <select>
              <option>Choose a recipe... </option>
              {props.recipes.map(r =>
                <option value={r.id}> {r.name} </option>
              )}
              </select>
            </td>
            <td data-id={meal[2].id}>
              <select>
                <option>Choose a recipe... </option>
                {props.recipes.map(r =>
                  <option value={r.id}> {r.name} </option>
                )}
              </select>
            </td>
            <td data-id={meal[3].id}>
              <select>
                <option>Choose a recipe... </option>
                {props.recipes.map(r =>
                  <option value={r.id}> {r.name} </option>
                )}
              </select>
            </td>
          </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}

export default RecipeDropdowns

// <select>
// <option>Choose a recipe... </option>
// {this.props.recipes.map(r =>
//     <option value={r.id}> {r.name} </option>
// )}
// </select>
