from marshmallow import Schema, fields, validate

class UserCreateSchema(Schema):
    id = fields.Number(dump_only=True)
    username = fields.Str(required=True, validate=validate.Length(min=1, max=20))
    email = fields.Email(required=True, validate=validate.Length(min=1, max=30))
    password = fields.Str(required=True, load_only=True, validate=validate.Length(min=1, max=20))

    

class UserDetailSchema(Schema):
    id = fields.Integer(dump_only=True)
    username = fields.Str(required=True, validate=validate.Length(min=1, max=20))
    email = fields.Email(required=True, validate=validate.Length(min=1, max=30))