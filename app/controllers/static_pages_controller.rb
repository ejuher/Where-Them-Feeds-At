class StaticPagesController < ApplicationController

	def index
		if logged_in?
			render :index
		else
			redirect_to welcome_url
		end
	end

	def welcome
	end
end
