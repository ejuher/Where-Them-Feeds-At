module Api
	class FeedsController < ApplicationController
		def index
			@faves = current_user.favorites.count
			@read_entries = current_user.read_entries
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
			@feed = Feed.find(params[:id])
			if params[:refresh]
				@feed.get_entries
				@entries = @feed.entries.order(published: :desc).page params[:page]
				@entries = @entries.to_a.reverse
			else
				@entries = @feed.entries.order(published: :desc).page params[:page] 
			end
			render "api/feeds/show"
		end

		private

		def feed_params
			params.require(:feed).permit(:feed_url);
		end
	end
end