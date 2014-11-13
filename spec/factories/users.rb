FactoryGirl.define do
  factory :user do |u|
    u.username { Faker::Internet.user_name }
    password_digest { Faker::Internet.password(6) }
  end
end
