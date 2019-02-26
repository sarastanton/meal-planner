const API_URL = process.env.REACT_APP_API_URL;

export const getMyMealdays = () => {
  // debugger
  return dispatch => {
    return fetch(`${API_URL}/mealdays`)
    .then(response => response.json())
    .then(mealdays => dispatch({
      type: "FETCH_USER_MEALDAYS",
      mealdays: mealdays
    }))
    .catch(error => console.log(error))
  }
}

export const sendMealdaySelection = selection => {
  return {
    type: "SEND_MEALDAY_SELECTION",
    selection
  }
}

export const editMealday = mealdayData => {
  return dispatch => {
    return fetch(`${API_URL}/mealdays/${mealdayData.mealDayId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recipe_id: mealdayData.recipeId })
    }).then(response => response.json())
      .then(dataJSON => console.log(dataJSON))
    // .then(updatedMealday => {
    //   dispatch({
    //     type: "UPDATE_SAVED_MEALDAY",
    //     updatedMealday
    //   })
    // })
    .catch(error => console.log(error))
  }
}
