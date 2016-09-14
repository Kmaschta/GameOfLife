from channels.routing import route
from life.consumers import http_consumer, ws_add, ws_disconnect, ws_receive

channel_routing = [
    route('http.request', http_consumer),
    route('websocket.connect', ws_add),
    route('websocket.receive', ws_receive),
    route('websocket.disconnect', ws_disconnect),
]
