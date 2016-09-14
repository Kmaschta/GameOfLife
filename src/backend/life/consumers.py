import json

from django.http import HttpResponse
from channels import Group
from channels.handler import AsgiHandler

from .game import Board

game = Board(75, 75)

def http_consumer(message):
    response = HttpResponse('Welcome to Game of Life! You should try websockets.')

    for chunk in AsgiHandler.encode_response(response):
        message.reply_channel.send(chunk)

def ws_add(message):
    Group('game').add(message.reply_channel)
    message.reply_channel.send({
        'text': json.dumps(game.current_generation),
    })

def ws_receive(message):
    game.new_generation()
    Group('game').send({
        'text': json.dumps(game.current_generation),
    })

def ws_disconnect(message):
    Group('game').discard(message.reply_channel)
