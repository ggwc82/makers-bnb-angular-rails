require 'rails_helper'

RSpec.describe Api::SpacesController, type: :controller do
  render_views

  let(:json) { JSON.parse(response.body) }

  describe 'some API test' do
    it 'returns the JSON spaces objects' do
      new_space = create(:space)
      get :index, format: :json
      expect(json.length).to eq(1)
    end
  end

  let(:valid_attributes) {
    {
      name: "my space",
      price: 234,
      location: "newcastle",
      size: 3,
      property_type: "lighthouse"
    }
  }

  describe "GET #show" do
    it "returns a single space" do
      space = create(:space)
      get :index, id: space, format: :json
      expect(json.last['name']).to eq 'my space'
    end
  end

  describe "POST #create" do
    it 'saves a space object' do
      post :create, {space: valid_attributes, format: :json}
      expect(Api::Space.last.name).to eq 'my space'
    end
  end

  describe "DELETE #destroy" do
    it 'delete a space' do
      create(:space)
      delete :destroy, format: :json, id: 4
      expect(Api::Space.where(id: 4)).to be_empty
    end
  end
end