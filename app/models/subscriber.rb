class Subscriber < ActiveRecord::Base
  attr_accessible :email
  validates_presence_of :email
  validates_uniqueness_of :email
  validates_format_of :email, with: /\A[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+\z/
end
