export const ingredientsReducer = (state = [], action) => {

  switch(action.type) {

    case "ADD_TO_SHOPPING_LIST":
    console.log("Reducer firing--add")
      return {
        shoppingList: [...state.shoppingList, action.item]
      };

    case "REMOVE_FROM_SHOPPING_LIST":
    console.log("Reducer firing--remove")
      return {
        shoppingList: state.shoppingList.filter(item => item.id !== action.item.id)
      }

    default:
    console.log("Reducer firing--default")
      return state;

  }
}
