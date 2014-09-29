module Api
	class EntriesController < ApplicationController
		def index
			if params[:feed_id] 
				@entries = Feed.find(params[:feed_id]).entries.page params[:page]
			else
				@entries = current_user.entries.order(published: :desc).page params[:page] 
			end
			render 'api/entries/index'
		end

		def show
			@entry = Entry.find(params[:id])
			render 'api/entries/show'
		end
	end
end
