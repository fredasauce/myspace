class AddLikedAccountsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_accounts, :text
  end
end
