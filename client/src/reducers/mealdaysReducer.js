export const mealdaysReducer = (state = {}, action) => {
  switch(action.type) {

    case "FETCH_USER_MEALDAYS":
      return {
        mealdays: action.mealdays,
      }

    // case "SEND_MEALDAY_SELECTION":
    //   return {
    //     ...state, mealdaySelection: action.selection
    //   };

    // case "UPDATE_SAVED_MEALDAY":
    // return {
    //   ...state, updatedMealday: action.mealday
    // }
    default:
      return state;

  }
}


// return {
//   ...state,
//   mealdays: [
//     {Monday: action.mealdays.filter(m => m.week_day === "Monday")},
//     {Tuesday: action.mealdays.filter(m => m.week_day === "Tuesday")},
//     {Wednesday: action.mealdays.filter(m => m.week_day === "Wednesday")},
//     {Thursday: action.mealdays.filter(m => m.week_day === "Thursday")},
//     {Friday: action.mealdays.filter(m => m.week_day === "Friday")},
//     {Saturday: action.mealdays.filter(m => m.week_day === "Saturday")},
//     {Sunday: action.mealdays.filter(m => m.week_day === "Sunday")},
//   ]
// }
