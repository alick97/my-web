from marshmallow import Schema, fields, validate

class UserLoginSchema(Schema):
    username = fields.Str(required=True, validate=validate.Length(min=1))
    password = fields.Str(required=True, validate=validate.Length(min=1))


class UserInfoSchema(Schema):
    id = fields.Str(required=True)
    name = fields.Str(required=True, attribute="username")