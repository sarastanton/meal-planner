class IngredientsController < ApplicationController

  before_action :find_ingredient_in_params, only: [:show, :edit, :destroy]
  before_action :set_all_ingredients, only: [:index, :destroy]

  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      render json: @ingredient, status: 200
    else
      render json: { message: @ingredient.errors }, status: 400
    end
  end

  def index
    render :json => {
      :ingredients => @ingredients,
      :shopping_list => Ingredient.shopping_list
    }
  end

  def show
    render json: @ingredient, status: 200
  end

  def update
    if @ingredient.update(ingredient_params)
      render json: @ingredient, status: 200
    else
      render json: { message: @ingredient.errors }, status: 400
    end
  end

  def destroy
    if @ingredient.destroy
      render json: @ingredients
    else
      render json: { message: @ingredient.errors }, status: 400
    end
  end

  private

    def find_ingredient_in_params
      @ingredient = Ingredient.find_by(id: params[:id])
    end

    def set_all_ingredients
      @ingredients = Ingredient.all
    end

    def ingredient_params
      params.require(:ingredient).permit(:quantity, :unit, :description)
    end

end
