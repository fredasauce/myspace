class Api::AccountsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    # render json: Account.all
    render json: User.non_friends(current_user.liked_accounts)
  end

  def show
    account = Account.find_by(user_id)
    render json: account
    # decide which way you want to see each account
    # @user.account(params[:id]) shows own acct?
  end

  def update
    current_user.liked_accounts << params[:id].to_i
    current_user.save
  end

  def remove_friend
    current_user.liked_accounts.delete(params[:id].to_i)
    current_user.save
  end

  def destroy
  end

  def my_accounts
    render json: User.liked(current_user.liked_accounts)
  end

end

