/**
 * Created by Daniel on 3/10/2016.
 */


/**
 * Node.js was designed to be simple, and this shows in its module system.
 * The Node.js require function is the main way of importing a module into the current file.
 * @type {*|exports|module.exports}
 */


    //  Function is exported and ASSIGNED to foo  (like a function expression)
    //  Object is exported and ASSIGNED to foo


var foo = require('./XmodExpModule');
//foo(); // logs out : "a function in file foo"


foo.myFunc1();
foo.myFunc2();
foo.myFunc3();