export const ingredientsReducer = (state = [], action) => {
  switch(action.type) {

    case "ADD_TO_SHOPPING_LIST":
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.item]
      };

    case "REMOVE_FROM_SHOPPING_LIST":
      return {
        ...state,
        shoppingList: state.shoppingList.filter(item => item.id !== action.item.id)
      }

    default:
      return state;

  }
}
