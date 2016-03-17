require 'rails_helper'

RSpec.describe "spaces/new", type: :view do
  before(:each) do
    assign(:space, Space.new(
      :name => "MyString",
      :price => 1,
      :location => "MyString",
      :size => 1.5,
      :property_type => "MyString"
    ))
  end

  it "renders new space form" do
    render

    assert_select "form[action=?][method=?]", spaces_path, "post" do

      assert_select "input#space_name[name=?]", "space[name]"

      assert_select "input#space_price[name=?]", "space[price]"

      assert_select "input#space_location[name=?]", "space[location]"

      assert_select "input#space_size[name=?]", "space[size]"

      assert_select "input#space_property_type[name=?]", "space[property_type]"
    end
  end
end
