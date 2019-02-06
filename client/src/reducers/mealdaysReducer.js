export const mealdaysReducer = (state = [], action) => {
  switch(action.type) {

    case "FETCH_USER_MEALDAYS":
      return {
        ...state,
        mealdays: action.mealdays
      };

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
