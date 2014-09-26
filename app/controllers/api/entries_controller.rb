module Api
	class EntriesController < ApplicationController
		def index
			render json: current_user.entries
		end
	end
end