module Api
	class FavoritesController < ApplicationController
		def index
			@entries = current_user.favorite_entries.includes(:feed).order(published: :desc).page params[:page]
			render '/api/entries/index'
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

		def fave_count
			@favorites = current_user.favorites.count
			render json: @favorites
		end

		private 

		def favorite_params
			params.require(:favorite).require(:entry_id)
		end
	end
end
