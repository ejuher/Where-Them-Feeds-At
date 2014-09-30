Rails.application.routes.draw do

	namespace :api do
		resources :entries, 
			only: [:create, :index, :show], 
			defaults: { format: :json }
	  resources :feeds, 
	  	only: [:create, :index, :show],
	  	defaults: { format: :json } do 
	  		resources :entries, only: [:index]
	  	end
	  resources :entry_reads, only: [:index, :create, :destroy]
	  resources :subscriptions, only: [:destroy]
	end
  
	root to: "static_pages#index"
	get 'welcome', to: "static_pages#welcome"

  resources :users, only: [:create, :show]
  resource :session, only: [:new, :create, :destroy]
end
