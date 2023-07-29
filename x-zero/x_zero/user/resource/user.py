from flask_restful import Resource
from flask import jsonify, request

from x_zero.authenticate.services import UserAuthService
from ...user.repository import UserRepository
from ..serializes import UserCreateSchema
from ..service import UserService


class UserResource(Resource):
    """user resource"""

    def post(self):
        """create user"""
        schema = UserCreateSchema()
        user_info = schema.load(request.get_json())
        user = UserService().create_user(
            name=user_info["username"],
            email=user_info["email"],
            password=user_info["password"]
        )
        # TODO: handle unque and other error and rollback
        user.save()
        return {"user": schema.dump(user)}, 201

