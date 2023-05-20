from flask_login import login_user
from x_zero.authenticate.exception import AuthError
from x_zero.exceptions.not_found import NotFoundException
from x_zero.user.repository import UserRepository

class UserAuthService:
    def login_user(self, user_name: str, password: str) -> None:
        try:
            user = UserRepository.get_user_by_name(user_name=user_name)
        except NotFoundException:
            raise AuthError("invlid username")
        if not user:
            raise AuthError("invalid username")

        if not user.check_password(password):
            raise AuthError("invalid password")

        if not user.active:
            raise AuthError("user not activated")
        
        if not login_user(user):
            raise AuthError("login error")
