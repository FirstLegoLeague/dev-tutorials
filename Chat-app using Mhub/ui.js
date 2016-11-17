var events = require('events');
var util = require('util');
var readline = require('readline');
 
 
function UI() {
    var self = this;
    this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    this.rl.setPrompt('-> ');
    this.rl.on('line', function(line) {
        readline.moveCursor(process.stdout, 0, -1);
        readline.clearLine(process.stdout, 0);
        self.emit('line', line);
    });
    this.rl.prompt(true);
}
 
util.inherits(UI, events.EventEmitter);
 
UI.prototype.writeLine = function(str) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(str);
    this.rl.prompt(true);
}
 
module.exports = UI;