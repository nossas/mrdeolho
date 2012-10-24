# coding: utf-8
class SubscribersController < ApplicationController
  inherit_resources
  respond_to :html
  respond_to :json, only: [:create]
  actions :index, :new, :create
  
end
