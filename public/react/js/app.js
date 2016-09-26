ReactDOM.render(
    <Main/>,
    document.getElementById("react-main")
);

var emitter = new EventEmitter();

emitter.on('START_THE_ENGINES', function() {
    console.log("Started the app.");
});

emitter.on('START_THE_ENGINES', function() {
    console.log("Started the app2.");
});

emitter.emit('START_THE_ENGINES');

MainDispatcher.register(function(action) {
    console.log("Received an action: " + action);
});