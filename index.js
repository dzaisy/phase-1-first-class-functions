function receivesAFunction(callback) {
    callback(); // calls the callback function
}

function returnsANamedFunction() {
    const fn = () => { // creates a new function and logs function into console
        console.log('function');
    }
    return fn; // returns a new function
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('function'); // logs function into console
    }
}