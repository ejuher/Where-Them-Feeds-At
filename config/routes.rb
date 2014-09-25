Rails.application.routes.draw do
  resources :entries

  resources :categories

  resources :feeds

	root to: "static_pages#index"
	get 'welcome', to: "static_pages#welcome"

  resources :users, only: [:create, :show]
  resource :session, only: [:new, :create, :destroy]
end
