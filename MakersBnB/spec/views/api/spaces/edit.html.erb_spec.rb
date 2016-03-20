require 'rails_helper'

RSpec.describe "api/spaces/edit", type: :view do
  before(:each) do
    @api_space = assign(:api_space, Api::Space.create!(
      :name => "MyString",
      :price => 1,
      :location => "MyString",
      :size => 1.5,
      :property_type => "MyString"
    ))
  end

  it "renders the edit api_space form" do
    render

    assert_select "form[action=?][method=?]", api_space_path(@api_space), "post" do

      assert_select "input#api_space_name[name=?]", "api_space[name]"

      assert_select "input#api_space_price[name=?]", "api_space[price]"

      assert_select "input#api_space_location[name=?]", "api_space[location]"

      assert_select "input#api_space_size[name=?]", "api_space[size]"

      assert_select "input#api_space_property_type[name=?]", "api_space[property_type]"
    end
  end
end
