class FeedsController < ApplicationController
	def index
		# BUT, later you will want to show more feeds on the explore page
		puts "FEEDS CONTROLLER INDEX <<<<<<<<<<<<<<<<<<"
		puts current_user
		puts current_user.feeds
		render json: current_user.feeds
	end
end
