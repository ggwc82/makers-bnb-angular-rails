class SpaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :location, :size, :property_type
end
