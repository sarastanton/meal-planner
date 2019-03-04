class RecipesController < ApplicationController

  before_action :find_recipe_in_params, only: [:show, :edit, :destroy]
  before_action :set_all_recipes, only: [:index, :destroy]

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render json: @recipe, status: 200
    else
      render json: { message: @recipe.errors }, status: 400
    end
  end

  def index
    render json: @recipes, status: 200
  end

  def show
    render json: @recipe, status: 200
  end

  def update
    if @recipe.update(recipe_params)
      render json: @recipe, status: 200
    else
      render json: { message: @recipe.errors }, status: 400
    end
  end

  def destroy
    if @recipe.destroy
      render json: @recipe
    else
      render json: { message: @recipe.errors }, status: 400
    end
  end

  private

    def find_recipe_in_params
      @recipe = Recipe.find_by(id: params[:id])
    end

    def set_all_recipes
      @recipes = Recipe.all
    end

    def recipe_params
      params.require(:recipe).permit(:name, :directions, ingredients_attributes: [ :id, :quantity, :unit, :description ])
  end

end
