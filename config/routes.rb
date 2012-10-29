Mrdeolho::Application.routes.draw do
  mount JasmineRails::Engine => "/specs" unless Rails.env.production?
  resources :subscribers, only: [:index, :new, :create]
  root to: 'subscribers#index'

end
