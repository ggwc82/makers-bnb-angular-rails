require 'rails_helper'

RSpec.describe "api/spaces/index", type: :view do
  before(:each) do
    assign(:api_spaces, [
      Api::Space.create!(
        :name => "Name",
        :price => 1,
        :location => "Location",
        :size => 1.5,
        :property_type => "Property Type"
      ),
      Api::Space.create!(
        :name => "Name",
        :price => 1,
        :location => "Location",
        :size => 1.5,
        :property_type => "Property Type"
      )
    ])
  end

  it "renders a list of api/spaces" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Location".to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => "Property Type".to_s, :count => 2
  end
end
