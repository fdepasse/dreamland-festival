from app import ma
from models.user_model import User
from marshmallow import fields, validates_schema
from marshmallow.exceptions import ValidationError


class UserSchema(ma.SQLAlchemyAutoSchema):

    @validates_schema
    def check_passwords_match(self, data):
        if data.get('password') != data.get('password_confirmation'):
            raise ValidationError(
                'Passwords do not match',
                'password_confirmation'
            )

    password = fields.String(required=True)
    password_confirmation = fields.String(required=True)
    
    class Meta:
        model = User
        load_instance = True
        exclude = ("password_hash","isAdmin")
        load_only = ("email", "password")

    
    acts = fields.Nested("ActSchema", many = True)
    orders = fields.Nested("OrderSchema", many = True)


