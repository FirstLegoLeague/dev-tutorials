# Development Tutorials & Code Snippts
This repo contains various development examples, tutorials and code snippets to be used to develop modules for the FIRST Lego league software. If you have any code you want to share with others please submit it through a Pull Request or email [us](mailto:info@fll-tools.com). You can also join Slack for any questions you have [flldev.slack.com](https://flldev.slack.com).

# Code snippets
Snack-snize and ready to eat pieces of code for you to use.

## MHub in Javascript

```JavaScript
ws = new WebSocket('ws://localhost:13900');

//subscribe to receive messages
ws.onopen = function() {
    ws.send(JSON.stringify({
        type: 'subscribe',
        node: 'default'
    }));
};

//handle messages received
ws.onmessage = function(msg) {
    console.log(JSON.parse(msg.data));
};

//send messages
function send(ws, topic, data) {
    ws.send(JSON.stringify({
        type: 'publish',
        node: 'default',
        data: data,
        topic: topic
    }));
}
```

## MHub in Nodejs

```JavaScript
var MClient = require("mhub").MClient;

var client = new MClient("ws://localhost:13900");

//subscribe to receive messages
client.on("open", function() {
    client.subscribe("default");
});

//handle messages received
client.on("message", function(message) {
    console.log(message);
});

//send messages
function send(client, topic, data) {
	client.publish("default", topic, data);
}
```

## Mhub in Python

```Python
import websocket
import json

#subscribe to receive messages
def on_open(ws):
    ws.send('{"type":"subscribe","node":"default"}')

#handle messages received
def on_message(ws, message):
    print json.loads(message)


ws = websocket.WebSocketApp("ws://localhost:13900",
                            on_message = on_message,
                            on_open = on_open)

ws.run_forever()

# send messages
def send(ws, topic, data):
    ws.send('{"type":"publish","node":"default","topic":"'+topic+'","data":'+json.dumps(data)+'}')
```

# Tutorials

## Introduction into Development: Chat application in Javascript using MHub
This tutorial provides a brief introduction into developping with MHub using a chat application example.  

- [Episode 1](https://www.youtube.com/watch?v=VfzPSmkNXWI&list=PLm7xyTqWtniElEuRqvtezmdHpEuAGWMj9&index=1): Setting up
- [Episode 2](https://www.youtube.com/watch?v=TRSJUfSS_LM&list=PLm7xyTqWtniElEuRqvtezmdHpEuAGWMj9&index=2): MHub
- [Episode 3](https://www.youtube.com/watch?v=OVQxqZ4bQIM&list=PLm7xyTqWtniElEuRqvtezmdHpEuAGWMj9&index=3): A chat application
- [Episode 4](https://www.youtube.com/watch?v=Yx1VF1vb6eA&index=4&list=PLm7xyTqWtniElEuRqvtezmdHpEuAGWMj9): A GUI for the chat
- [Example code](https://github.com/FirstLegoLeague/dev-tutorials/tree/master/Chat-app%20using%20Mhub): Chat application
