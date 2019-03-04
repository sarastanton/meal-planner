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
            <td>
              <select data-id={meal[1].id} onChange={(e) => sendUpdateData(props, e)}>
              <option> {meal[1].recipe.name} </option>
              {props.recipes.map(r =>
                <option value={r.id} > {r.name} </option>
              )}
              </select>
            </td>
            <td>
              <select data-id={meal[2].id} onChange={(e) => sendUpdateData(props, e)}>
              <option> {meal[2].recipe.name} </option>
                {props.recipes.map(r =>
                  <option value={r.id}> {r.name} </option>
                )}
              </select>
            </td>
            <td>
              <select data-id={meal[3].id} onChange={(e) => sendUpdateData(props, e)}>
              <option> {meal[3].recipe.name} </option>
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

const sendUpdateData = (props, event) => {
  let updateData = {
    mealDayId: parseInt(event.target.dataset.id),
    recipeId: parseInt(event.target.value)
  };
  props.updateMealPlan(updateData);
}


export default RecipeDropdowns
