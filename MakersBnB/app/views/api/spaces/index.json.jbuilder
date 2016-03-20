json.array!(@api_spaces) do |api_space|
  json.extract! api_space, :id, :name, :price, :location, :size, :property_type
  json.url api_space_url(api_space, format: :json)
end
