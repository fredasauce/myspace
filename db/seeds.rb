20.times do
  name = Faker::Name.name,
  email = Faker::Internet.email
  password = "password"
  user = User.create(email: email, password: password, password_confirmation: password)

  Account.create(
    name: name,
    gender: Faker::Gender.type,
    birthday: Faker::Date.birthday(min_age = 18),
    avatar: Faker::Avatar.image(name, "100x400", "png", "set5"),
    user_id: user.id
  )
  
end

puts "20 Users with an Account Created"