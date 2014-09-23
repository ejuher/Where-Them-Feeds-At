class User < ActiveRecord::Base
	validates :username, presence: { message: "Username can't be blank" }
	validates :password_digest, presence: { message: "Password can't be blank" }
	validates :password, length: { minimum: 6, allow_nil: true }

	after_initialize :ensure_session_token

	attr_reader :password

	def self.generate_session_token
		SecureRandom::urlsafe_base64(16)
	end

	def self.find_by_credentials(username, password)
		user = User.find_by_username(username)
		return nil if user.nil?
		user.is_password?(password) ? user : nil
	end

	def password=(password)
		self.password_digest = BCrypt::Password.create(password);
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end
end
