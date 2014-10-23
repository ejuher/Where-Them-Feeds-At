module Api
	class FavoritesController < ApplicationController
		def index
			@favorites = Favorite.all
			render json: @favorites
		end

		def create
			favorite = Favorite.new({ 
				user_id: current_user.id, 
				entry_id: favorite_params
			})

			if favorite.save
				render json: favorite
			else
				raise 'Error while saving favorite'
			end
		end

		def destroy
			favorite = Favorite.find(params[:id])
			favorite.delete
			render json: favorite
		end

		private 

		def favorite_params
			params.require(:favorite).require(:favorite_id)
		end
	end
end
