class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :author
      t.text :body
      t.boolean :liked
      t.belongs_to :account, foreign_key: true

      t.timestamps
    end
  end
end
