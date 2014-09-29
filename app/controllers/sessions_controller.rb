class SessionsController < ApplicationController
	def new
	end

	def create
		@user = User.find_by_credentials(
			params[:user][:username],
			params[:user][:password]
		)

		if @user.nil?
			redirect_to welcome_url
		else
			login!(@user)
			# redirect_to user_url(@user)
			redirect_to root_url
		end
	end

	def destroy
		logout!
		respond_to do |format|
			format.html { redirect_to welcome_url }
			format.json { render json: { message: "logout successful" }} 
		end
	end
end
