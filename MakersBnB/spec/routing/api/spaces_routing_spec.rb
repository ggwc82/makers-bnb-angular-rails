require "rails_helper"

RSpec.describe Api::SpacesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/api/spaces").to route_to("api/spaces#index")
    end

    it "routes to #new" do
      expect(:get => "/api/spaces/new").to route_to("api/spaces#new")
    end

    it "routes to #show" do
      expect(:get => "/api/spaces/1").to route_to("api/spaces#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/api/spaces/1/edit").to route_to("api/spaces#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/api/spaces").to route_to("api/spaces#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/api/spaces/1").to route_to("api/spaces#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/api/spaces/1").to route_to("api/spaces#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/api/spaces/1").to route_to("api/spaces#destroy", :id => "1")
    end

  end
end
