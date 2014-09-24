class UsersController < ApplicationController

	def create
		@user = User.new(user_params)

		if @user.save
			login!(@user)
			# redirect_to user_url(@user) 
			redirect_to root_url
		else
			flash[:errors] = @user.errors.full_messages
			redirect_to welcome_url
		end
	end

	def show
		@user = current_user
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end
end
