export const addToShoppingList = item => {
  console.log("Action fired")
  console.log(item)
  debugger
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
