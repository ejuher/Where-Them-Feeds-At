class SessionsController < ApplicationController
	def new
	end

	def create
		@user = User.find_by_credentials(
			params[:user][:username],
			params[:user][:password]
		)

		if @user.nil?
			# show error messages?
			# render :new
			redirect_to root_url
		else
			login!(@user)
			redirect_to user_url(@user)
		end
	end

	def destroy
		logout!
		redirect_to new_session_url
	end
end
