class Api::AccountsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: Accounts.all
  end

  def show
    Account.find_by(user_id)
    # decide which way you want to see each account
    # @user.account(params[:id]) shows own acct?
  end

  def update
  end
end

