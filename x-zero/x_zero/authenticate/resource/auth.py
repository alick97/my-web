

from flask_restful import Resource
from flask import jsonify, request

from x_zero.authenticate.services import UserAuthService
from ...user.repository import UserRepository
from ..serializes import UserLoginSchema, UserInfoSchema


class AuthResource(Resource):
    """用户认证"""

    def post(self):
        """用户身份校验"""
        login_data = UserLoginSchema().load(request.get_json())
        username = login_data["username"]
        password = login_data["password"]
        UserAuthService().login_user(username, password)
        user = UserRepository.get_user_by_name(username)
        return jsonify({"user": UserInfoSchema().dump(user)})


