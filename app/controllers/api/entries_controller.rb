module Api
	class EntriesController < ApplicationController
		def index
			render json: current_user.entries.order(published: :desc).limit(50)
		end
	end
end