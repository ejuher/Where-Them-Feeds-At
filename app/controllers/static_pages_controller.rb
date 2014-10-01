class StaticPagesController < ApplicationController

	def index
		if logged_in?
			# refresh all feeds
			# current_user.feeds.each { |feed| feed.get_entries }
			render :index
		else
			redirect_to welcome_url
		end
	end

	def welcome
	end
end
