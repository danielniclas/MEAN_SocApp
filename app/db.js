/**
 * Created by danielniclas on 12/27/15.
 */


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social',function() {
    console.log('mongodb SOCIAL connected');
});


module.exports = mongoose;

