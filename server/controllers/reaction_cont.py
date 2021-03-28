from flask import Blueprint, request, g
from models.reaction_model import Reaction
from serializers.reaction_serial import ReactionSchema
from models.act_model import Act
from serializers.act_serial import ActSchema
from marshmallow.exceptions import ValidationError
from decorators.secure_route import secure_route

reaction_schema = ReactionSchema()
act_schema = ActSchema()

router = Blueprint(__name__, "reactions")

@router.route("/reactions/<int:act_id>", methods=["PUT"])
@secure_route
def update_reactions(act_id):

# Getting all info
    user = g.current_user
    act = Act.query.get(act_id)
    reaction_dictionary = request.json["reaction_type"]

# Filtering the reaction list of the selected act
# Will return either a reaction if the current user has made one (thruthy)
# Or will return an empty list (falsy)
    find_reaction = [reaction for reaction in act.reactions if reaction.user.id == user.id]

# If above is true it means we want to remove the reaction for this act and this user
# Only allowed to react once per act and per user
# If above is false, create a new reaction and save it
    if find_reaction:
        find_reaction[0].remove()
        act.save()
    else:
        new_reaction = Reaction(reaction_type = reaction_dictionary, user_id = user.id, act_id = act_id) 
        new_reaction.save()

# Finally return the act with the reaction removed or added
    return act_schema.jsonify(act), 200