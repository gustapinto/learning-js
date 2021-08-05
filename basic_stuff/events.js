const EventEmmiter = require('events')  // Import the std. events module

/* All event emmiter objects must be a instance of EventEmmiter class
 * they will have a exposed .on() method, that is used to listen for
 * the events
 */
const emmiter = new EventEmmiter()

emmiter.on('foo', _ => {
    console.log('FOO')
})

emmiter.on('bar', _ => {
    /* The events are synchronous by default, but they can also be used
     * as asynchronous by calling the callback body on the setImmediate()
     * or on process.nextTick() Functions
     */
    setImmediate(_  => {
        console.log('BAR')
    })
})

emmiter.on('info', function() {
    /* All emmiters can use the this keyword to access his inner
     * properties, but only when the callback is a classic function aka.
     * not a arrow function
     */
    console.log(this)
})

// Node also provides a event.once() method, this prevents a second call
emmiter.once('once', _ => {
    console.log('I will only appear one time')
})

emmiter.emit('foo')
emmiter.emit('bar')
emmiter.emit('info')
emmiter.emit('once')
emmiter.emit('once')
