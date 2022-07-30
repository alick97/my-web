

from flask_restful import Resource
from flask import jsonify, request

from x_zero.authenticate.services import UserAuthService
from ..serializes import UserLoginSchema


class AuthResource(Resource):
    """用户认证"""

    def post(self):
        """用户身份校验"""
        login_data = UserLoginSchema().load(request.get_json())
        username = login_data["username"]
        password = login_data["password"]
        UserAuthService().login_user(username, password)
        return jsonify()


