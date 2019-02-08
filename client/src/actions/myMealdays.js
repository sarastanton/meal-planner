const API_URL = process.env.REACT_APP_API_URL;

export const getMyMealdays = () => {
  // debugger
  return dispatch => {
    return fetch(`${API_URL}/mealdays`)
    .then(response => response.json())
    .then(mealdays => dispatch({
      type: "FETCH_USER_MEALDAYS",
      mealdays: [
        { monday: mealdays.filter(day => day.week_day === "Monday") },
        { tuesday: mealdays.filter(day => day.week_day === "Tuesday") },
        { wednesday: mealdays.filter(day => day.week_day === "Wednesday") },
        { thursday: mealdays.filter(day => day.week_day === "Thursday") },
        { friday: mealdays.filter(day => day.week_day === "Friday") },
        { saturday: mealdays.filter(day => day.week_day === "Saturday") },
        { sunday: mealdays.filter(day => day.week_day === "Sunday") }
      ]
    }))
    .catch(error => console.log(error))
  }
}

// export const sendMealdaySelection = selection => {
//   return {
//     type: "SEND_MEALDAY_SELECTION",
//     selection
//   }
// }

// export const editMealday = mealdayData => {
//   return dispatch => {
//     return fetch(`${API_URL}/mealdays/${mealdayData.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ mealday: mealdayData })
//     // }).then(console.log(mealdayData))
//     }).then(response => response.json())
//     .then(mealday => {
//       dispatch({
//         type: "UPDATE_SAVED_MEALDAY",
//         recipe
//       })
//     })
//     .catch(error => console.log(error))
//   }
// }
