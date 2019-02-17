export const ingredientsReducer = (state = [], action) => {
  switch(action.type) {

    case "ADD_TO_SHOPPING_LIST":
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.item]
      };

    default:
      return state;

  }
}
