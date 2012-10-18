Mrdeolho::Application.routes.draw do
  resources :subscribers, only: [:index, :new, :create]
  root to: 'subscribers#index'

end
