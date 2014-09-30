module Api
	class SubscriptionsController < ApplicationController
		def destroy
			subscription = Subscription.find(params[:id])
			subscription.delete
			render json: { message: 'delete successful' }
		end
	end
end