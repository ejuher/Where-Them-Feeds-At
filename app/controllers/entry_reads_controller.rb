module Api
	class EntryReadsController < ApplicationController
		def index
			@reads = EntryRead.all
			render json: @reads
		end

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
			# give an entry_read id
			# on entry index item, 
			# if the model has been read by current user,
			# give the model the entry_read_id
			# else, set the entry_read_id to nil
			entry_read = EntryRead.find(params[:id])
			entry_read.delete
			render json: entry_read
		end

		private 

		def entry_read_params
			params.require(:entry_read).require(:entry_id)
		end
	end
end