export const createNewRecipe = recipeFormData => {
  return {
    type: "CREATE_RECIPE",
    recipeFormData
  }
}
