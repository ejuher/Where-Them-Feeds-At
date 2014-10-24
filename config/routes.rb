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
	  resources :favorites, 
	  	only: [:index, :create, :destroy],
	  	defaults: { format: :json }
	  resources :subscriptions, only: [:destroy]
	  get 'fave_count', to: "favorites#fave_count"
	end
  
	root to: "static_pages#index"
	get 'welcome', to: "static_pages#welcome"

  resources :users, only: [:create, :show]
  resource :session, only: [:new, :create, :destroy]
end
