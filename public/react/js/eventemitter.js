/**
 * Created by masstamike on 9/24/16.
 */

/**
 * Create a simple Event Emitter.
 * @constructor
 */
function EventEmitter () {
    this._events = {};
}

/**
 * Add an event listener.
 * @param type {string} Name of event to trigger on.
 * @param listener {function} Function to execute on event.
 */
EventEmitter.prototype.on = function (type, listener) {
    this._events[type] = this._events[type] || [];
    this._events[type].push(listener);
};

/**
 * Emit an event.
 * @param type {string} Name of event to trigger.
 */
EventEmitter.prototype.emit = function (type) {
    if (this._events[type]) {
        this._events[type].forEach(function(listener) {
            listener();
        });
    }
};

/**
 * Remove a listener from an event.
 * @param type {string} Name of event to remove a listener from.
 * @param listener {function} Function to remove from listener.
 */
EventEmitter.prototype.removeListener = function (type, listener) {
    if (this._events[type]) {
        this._events[type].splice(this._events[type].indexOf(listener),1);
    }
};