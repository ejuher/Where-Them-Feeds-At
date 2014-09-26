Rails.application.routes.draw do

	namespace :api do
		resources :entries, only: [:create, :index, :show]
	  resources :feeds, only: [:create, :index, :show, :destroy]
	end
  
	root to: "static_pages#index"
	get 'welcome', to: "static_pages#welcome"

  resources :users, only: [:create, :show]
  resource :session, only: [:new, :create, :destroy]
end
