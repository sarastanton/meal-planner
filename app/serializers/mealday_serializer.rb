class MealdaySerializer < ActiveModel::Serializer
  attributes :id, :week_day, :meal_name

  belongs_to :recipe

end
