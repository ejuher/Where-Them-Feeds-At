module Api
	class EntriesController < ApplicationController
		def index
			@entries = current_user.entries.order(published: :desc).page params[:page] #.limit(50)
			render 'api/entries/index'
		end

		def show
			@entry = Entry.find(params[:id])
			render 'api/entries/show'
		end
	end
end