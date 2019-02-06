class MealdaySerializer < ActiveModel::Serializer
  attributes :id, :week_day, :meal_name, :recipe

  belongs_to :recipe

end
