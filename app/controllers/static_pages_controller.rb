class StaticPagesController < ApplicationController

	def index
		if logged_in?
			# refresh all feeds if its been more than 10 minutes
			if !Entry.all.empty? && (Time.now - Entry.pluck(:created_at).max) > 900 
				current_user.delay.feeds.each { |feed| feed.get_entries }
			end
			render :index
		else
			redirect_to welcome_url
		end
	end

	def welcome
	end
end
