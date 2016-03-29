/**
 * Created by Daniel on 3/10/2016.
 */




/**
 * In order to use this function from a file bar.js,
 * we simply import foo using the globally available require function and store the returned value in a local variable.
 */


//module.exports = function () {
//    console.log('a function in file foo');
//};

myObject = {
    myFunc1: function(){console.log("Mookers")},
    myFunc2: function(){console.log("Nibbs")},
    myFunc3: function(){console.log("Koost")}
};

module.exports = myObject;

