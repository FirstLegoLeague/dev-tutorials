var MClient = require('mhub').MClient;
var UI = require('./ui');

var client = new MClient('ws://localhost:13900');

var user = process.argv[2];

client.on('open',function() {
    client.subscribe('default');
});

var ui = new UI();
client.on('message',function(message) {
    var data = '['+message.data.user+'] '+message.data.line;
    ui.writeLine(data);
});

ui.on('line',function(line) {
    var data = {
        user: user,
        line: line
    };
    client.publish('default','message',data);
});