# Solutions

## Think, Pair, Share

1. `User.where(last_name: "Hendrickson")`
2. `Aritcle.where(id: 54..67)` <-- exclusive of 67, three dots (...) is inclusive
3. `Answer.where("upvotes > ?", 100)`
4. `Article.all`


### Conference seed data

```ruby
# seed database
10.times do
  Talk.create({
    topic: FFaker::Company.catch_phrase,
    duration: rand(1..6)*15
  })
end
```

1. `Talk.delete(1)`
1. `Talk.first`
1. `Talk.last`
1. `Talk.find_by(id:2)`
1. `Talk.find_by(topic: 'This is the topic')`
1. `Talk.order(:topic)`
1. `Talk.find_by(id:2).update(topic: 'This is the new topic.')`
1. `Talk.destroy_all`
