const EventEmitter = require('events');

const emitter = new EventEmitter();
setInterval(()=>{
    emitter.emit('timer', 'hello');
}, 1500);
emitter.on('timer', (message)=>console.log(message));