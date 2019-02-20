export const addToShoppingList = item => {
  return {
    type: "ADD_TO_SHOPPING_LIST",
    item
  }
}

export const removeFromShoppingList = item => {
  return {
    type: "REMOVE_FROM_SHOPPING_LIST",
    item
  }
}
