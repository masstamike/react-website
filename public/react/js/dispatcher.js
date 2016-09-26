/**
 * Created by masstamike on 9/24/16.
 */

/**
 * Creates a flux dispatcher
 * @constructor
 */
function Dispatcher() {
    this._lastID = 0;
    this._callbacks = {};
}

/**
 * Register a callback on the dispatcher.
 * @param callback {function} Function to execute on dispatch.
 * @returns {string} ID that has been registered on the dispatcher.
 */
Dispatcher.prototype.register = function(callback) {
    var id = 'CID_' + this._lastID++;
    this._callbacks[id] = callback;
    return id;
};

/**
 * Dispatch all registered callbacks for action.
 * @param action {string} Action passed into all registered callbacks.
 */
Dispatcher.prototype.dispatch = function(action) {
    for (var id in this._callbacks) {
        this._callbacks[id](action);
    }
};

Dispatcher.prototype.waitFor = function(ids) {
    // TODO
};