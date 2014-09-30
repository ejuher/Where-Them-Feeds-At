module Api
	class EntryReadsController < ApplicationController
		def create
			entry_read = EntryRead.new(entry_read_params)

			if entry_read.save
				render :json
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
			params.require(:entry_read).require(:user_id, :entry_id)
		end
	end
end