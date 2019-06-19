class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :gender
      t.string :birthday
      t.string :avatar

      t.timestamps
    end
  end
end
