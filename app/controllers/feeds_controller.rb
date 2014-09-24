class FeedsController < ApplicationController
	def index
		# BUT, later you will want to show more feeds on the explore page
		render json: current_user.feeds
	end
end
