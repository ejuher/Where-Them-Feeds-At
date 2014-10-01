module Api
	class FeedsController < ApplicationController
		def index
			# BUT, later you will want to show more feeds on the explore page
			# render json: current_user.feeds
			@feeds = current_user.feeds
			render 'api/feeds/index'
		end

		def create
			feed = Feed.find_or_create_by_url(feed_params[:feed_url])
			if !!feed 
				Subscription.create_subscription(current_user.id, feed.id)
				render json: feed 
			else
				raise "Invalid URL"
			end
		end

		def show
			@page = params[:page]
			@feed = Feed.includes(:entries, :subscriptions).find(params[:id])
			if params[:refresh]
				@feed.get_entries
			end

			render "api/feeds/show"
		end

		private

		def feed_params
			# params.require(:feed).permit(:feed_url, :refresh);
			params.require(:feed).permit(:feed_url);
		end
	end
end