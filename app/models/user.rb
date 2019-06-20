# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :accounts

  serialize :liked_accounts, Array

  def self.non_friends(ids)
    ids = ids.empty? ? [0] : ids
    Account.where("id NOT IN (?)", ids)
   end
   
  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Account.where("id IN (?)", ids)
  end

end
