require 'rails_helper'

RSpec.describe User, :type => :model do
  it "has a valid factory" do
  	expect(FactoryGirl.create(:user)).to be_valid
  end

  it "is invalid without a username" do 
  	expect(FactoryGirl.build(:user, username: nil)).to_not be_valid
  end

  it "is invalid without a password_digest" do
  	expect(FactoryGirl.build(:user, password_digest: nil)).to_not be_valid
  end

  it "is invalid if the username is not unique" do 
  	test_user_name = Faker::Internet.user_name
  	FactoryGirl.create(:user, username: test_user_name)
  	expect(FactoryGirl.build(:user, username: test_user_name)).to_not be_valid
  end

  it "can set and check passwords" do 
  	user = FactoryGirl.create(:user)
  	password = Faker::Internet.password(6)
  	user.password = password
  	expect(user.is_password?(password)).to be true
  end
end
