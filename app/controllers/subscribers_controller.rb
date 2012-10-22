# coding: utf-8
class SubscribersController < ApplicationController
  inherit_resources
  actions :index, :new, :create
  
  def create
    create!(notice: "Seu e-mail foi cadastrado com sucesso! :)")
  end
end
