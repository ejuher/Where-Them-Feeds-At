module Api
	class EntryReadsController < ApplicationController
		def create
			entry_read = EntryRead.new({ 
				user_id: current_user.id, 
				entry_id: entry_read_params
			})

			if entry_read.save
				render json: entry_read
			else
				raise 'Error while saving entry_read'
			end
		end

		def destroy
			entry_read = EntryRead.find(params[:id])
			entry_read.delete
			render :json 
		end

		private 

		def entry_read_params
			params.require(:entry_read).require(:entry_id)
		end
	end
end