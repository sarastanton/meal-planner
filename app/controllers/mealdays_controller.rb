class MealdaysController < ApplicationController

  before_action :find_mealday_in_params, only: [:show, :update, :destroy]
  before_action :set_all_mealdays, only: [:index, :destroy]

  def create
    @mealday = Mealday.new(mealday_params)
    if @mealday.save
      render json: @mealday, status: 200
    else
      render json: { message: @mealday.errors }, status: 400
    end
  end

  def index
    render json: @mealdays, status: 200
  end

  def show
    render json: @mealday, status: 200
  end

  def update
    # byebug
    if @mealday.update(mealday_params)
      render json: @mealday, status: 200
    else
      render json: { message: @mealday.errors }, status: 400
    end
  end

  def destroy
    if @mealday.destroy
      render json: @mealdays
    else
      render json: { message: @mealday.errors }, status: 400
    end
  end

  private

    def find_mealday_in_params
      @mealday = Mealday.find_by(id: params[:id])
    end

    def set_all_mealdays
      @mealdays = Mealday.all
    end

    def mealday_params
      params.require(:mealday).permit(:week_day, :meal_name, :recipe_id)
    end

end
