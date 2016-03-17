json.array!(@spaces) do |space|
  json.extract! space, :id, :name, :price, :location, :size, :property_type
  json.url space_url(space, format: :json)
end
