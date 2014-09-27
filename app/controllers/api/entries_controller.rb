module Api
	class EntriesController < ApplicationController
		def index
			@entries = current_user.entries.order(published: :desc).limit(50)
			render 'api/entries/index'
		end
	end
end