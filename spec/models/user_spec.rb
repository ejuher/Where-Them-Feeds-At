require 'rails_helper'

RSpec.describe User, :type => :model do
  it "has a valid factory" do
  	FactoryGirl.create(:user).should be_valid
  end

  it "is invalid without a username" do 
  	FactoryGirl.build(:user, username: nil).should_not be_valid
  end

  it "is invalid without a password_digest" do
  	FactoryGirl.build(:user, password_digest: nil).should_not be_valid
  end

  it "is invalid if the username is not unique" do 
  	test_user_name = Faker::Internet.user_name
  	FactoryGirl.create(:user, username: test_user_name)
  	FactoryGirl.build(:user, username: test_user_name).should_not be_valid
  end
end
