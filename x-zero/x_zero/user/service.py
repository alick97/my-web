from typing import Tuple
from .models import User
from .repository import UserRepository

class UserService:
    def create_user(self, name: str, email: str, password: str) -> User:
        user = User()
        user.username = name
        user.email = email
        user.password = password
        user.first_name, user.last_name = self._get_firstname_lastname(name)
        return user
    
    def _get_firstname_lastname(self, name: str) -> Tuple[str, str]:
        name_list = name.split(" ")
        if len(name_list) < 2:
            name_list = name
        return name_list[-1], "".join(name_list[0:-1])
    
    def get_user_by_id(self, user_id: int) -> User:
        return UserRepository.get_user_by_id(user_id)

