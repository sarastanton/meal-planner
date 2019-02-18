const initialMealdaysState = {
  state: {
    mealdays: [],
    mealSelection: {},
  }
}

export const mealdaysReducer = (state = initialMealdaysState, action) => {
  switch(action.type) {

    case "FETCH_USER_MEALDAYS":
      return {
        ...state,
        mealdays: action.mealdays,
      }

    case "SEND_MEALDAY_SELECTION":
      return {
        ...state,
        mealSelection: action.selection
      };

    // case "UPDATE_SAVED_MEALDAY":
    // return {
    //   ...state, updatedMealday: action.mealday
    // }

    default:
      return state;

  }
}
