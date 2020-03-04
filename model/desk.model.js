var mongoose = require('mongoose');
var deskSchema = new mongoose.Schema({
 name_table:String,
 status_of_table:Boolean
})

var Desk = mongoose.model('Desk', deskSchema, 'desk');
module.exports = Desk;
