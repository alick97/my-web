from flask_restful import Resource
from flask import jsonify, request, current_app
from flask_login import current_user, login_required

from ..serializes import UserCreateSchema, UserDetailSchema
from ..service import UserService


class UserResourceList(Resource):
    """user resource list"""

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
    
class UserResource(Resource):
    """user resource"""
    @login_required
    def get(self, user_id: int):
        """get user_id"""
        schema = UserDetailSchema()
        user = UserService().get_user_by_id(user_id)
        # TODO: other permission
        if user.id != current_user.id:
            return {}, 403
            
        return {"user": schema.dump(user)}, 200
