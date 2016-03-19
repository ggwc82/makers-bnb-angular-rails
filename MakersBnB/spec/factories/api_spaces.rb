FactoryGirl.define do
  factory :space, class: 'Api::Space' do
    name "my space"
    price 1000
    location "london"
    size 150.00
    property_type "house"
  end
end
