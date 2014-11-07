class StaticPagesController < ApplicationController

	def index
		if logged_in?
			# refresh all feeds if its been more than 10 minutes
			if !Entry.all.empty? && (Time.now - Entry.pluck(:created_at).max) > 900 
				current_user.feeds.each { |feed| feed.get_entries }
				# want to asynchronously make this get_entries call
				# while its checking the rss feeds, do not allow user to 
				# press refresh. Once feeds have been refreshed, allow user
				# to click refresh

				# 2. have a scheduled job that repeatedly gets the entries for 
				#    subscribed feeds
				# 3. do not refresh when user logs in.
			end
			render :index
		else
			redirect_to welcome_url
		end
	end

	def welcome
	end
end
