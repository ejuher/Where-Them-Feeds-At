class UsersController < ApplicationController
	def new
	end

	def create
		@user = User.new(user_params)

		if @user.save
			login!(@user)
			redirect_to user_url(@user) # user show page 
			# redirect_to feeds_url ??
		else
			flash.now[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def edit
	end

	def update
	end

	def destroy
	end

	def index
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
