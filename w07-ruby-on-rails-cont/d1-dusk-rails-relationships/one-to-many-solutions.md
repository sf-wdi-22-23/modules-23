Generate models:

  ```
  $ rails g model Order name:string
  $ rails g model Item name:string description:string price:integer
  ```

Define the relationship in both models:

  ```ruby
  #
  # app/models/owner.rb
  #
  class Order < ActiveRecord::Base
    has_many :items, dependent: :destroy
  end
  ```

  ```ruby
  #
  # app/models/pet.rb
  #
  class Item < ActiveRecord::Base
    belongs_to :order
  end
  ```

  Add a foreign key to the items migration:

    ```ruby
    #
    # db/migrate/20150804001429_create_pets.rb
    #
    class CreateItems < ActiveRecord::Migration

      def change
        create_table :items do |t|
          t.string :name
          t.timestamps

          # add this line
          t.integer :order_id

          # OR this line
          t.references :order

          # OR... this line
          t.belongs_to :order

          # but NOT all three!
        end
      end

    end
    ```

Create your database tables by running your migrations from the terminal:

  ```
  $ rake db:migrate
  ```

Still in the terminal, enter the rails console (`rails c`) to create and associate data!

  ```ruby
  roll = Item.create(name: "California Roll", description: "Tasty", price: 10)
  sushi = Order.create(name: "Sushi")
  sushi.items << roll # makes CA Roll one of sushi's
  sushi.items.map(&:name)
  sushi.items.each do |item| puts "#{item.name}!" end
  ```
