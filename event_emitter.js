'use strict';

const EventEmitter = require('events').EventEmitter 
let emitter = new EventEmitter() 
emitter.on('newNumber', n => setImmediate(() => console.log(n * 2))) //newNumber is event name
for (let i = 0; i < 10; i++) { 
	emitter.emit('newNumber', i) 
}
