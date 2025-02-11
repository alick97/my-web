from .models import User
from x_zero.exceptions.not_found import NotFoundException

class UserRepository:

    @staticmethod
    def get_user_by_name(user_name: str) -> User:
        user = User.query.filter(User.username == user_name).first()
        if not user:
            raise NotFoundException()
        return user
    
    @staticmethod
    def get_user_by_id(user_id: int) -> User:
        user = User.query.filter(User.id == user_id).first()
        if not user:
            raise NotFoundException()
        return user

