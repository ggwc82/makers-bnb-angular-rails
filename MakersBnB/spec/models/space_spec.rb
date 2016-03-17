require 'rails_helper'

RSpec.describe Space, type: :model do
  describe "Space" do
    it "can create a space" do
      new_space = create(:space)
      expect(new_space.id).to eq 18
    end

    it "has a name" do
      new_space = create(:space)
     expect(new_space.name).to eq "my space"
    end
  end
end


