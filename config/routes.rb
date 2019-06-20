Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    
    resources :accounts do
      resources :posts
    end
    
    get "my_accounts", to: "accounts#my_accounts"
    put "remove_friend/:id", to: "accounts#remove_friend"
  end

end
