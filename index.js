function receivesAFunction(word){
    return word()
}

function returnsANamedFunction () {
    return function function1() {
        console.log(`hi`);
    }
}

function returnsAnAnonymousFunction () {
    return function() {
        console.log(`hi`);
    }
}