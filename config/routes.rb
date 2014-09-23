Rails.application.routes.draw do
	root to: "static_pages#welcome"

  resources :users#, except: :index
  resource :session, only: [:new, :create, :destroy]
end
