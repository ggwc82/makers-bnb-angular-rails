require 'rails_helper'

RSpec.describe "spaces/show", type: :view do
  before(:each) do
    @space = assign(:space, Space.create!(
      :name => "Name",
      :price => 1,
      :location => "Location",
      :size => 1.5,
      :property_type => "Property Type"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/1/)
    expect(rendered).to match(/Location/)
    expect(rendered).to match(/1.5/)
    expect(rendered).to match(/Property Type/)
  end
end
