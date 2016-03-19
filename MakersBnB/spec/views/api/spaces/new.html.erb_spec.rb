require 'rails_helper'

RSpec.describe "api/spaces/new", type: :view do
  before(:each) do
    assign(:api_space, Api::Space.new(
      :name => "MyString",
      :price => 1,
      :location => "MyString",
      :size => 1.5,
      :property_type => "MyString"
    ))
  end

  it "renders new api_space form" do
    render

    assert_select "form[action=?][method=?]", api_spaces_path, "post" do

      assert_select "input#api_space_name[name=?]", "api_space[name]"

      assert_select "input#api_space_price[name=?]", "api_space[price]"

      assert_select "input#api_space_location[name=?]", "api_space[location]"

      assert_select "input#api_space_size[name=?]", "api_space[size]"

      assert_select "input#api_space_property_type[name=?]", "api_space[property_type]"
    end
  end
end
