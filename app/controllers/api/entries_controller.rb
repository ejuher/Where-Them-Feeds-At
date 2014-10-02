module Api
	class EntriesController < ApplicationController
		def index
			if params[:feed_id] 
				@entries = Feed.find(params[:feed_id]).entries.includes(:feed).order(published: :desc).page params[:page]
			else
				Feed.all.each{ |feed| feed.get_entries } if params[:refresh]
				@entries = current_user.entries.includes(:feed).order(published: :desc).page params[:page] 
			end
			render 'api/entries/index'
		end

		def show
			@entry = Entry.find(params[:id])
			render 'api/entries/show'
		end
	end
end

# how does backbone get to the varying index methods in this controller?
# the entries collection in backbone has two different urls. One to use if it
# has a feed intialized, and one to use if it does not