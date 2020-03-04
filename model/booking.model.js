var mongoose= require('mongoose');
var booking_Schema = new mongoose.Schema({
   student_id:Object,
   desk_id:Object,
   name_table: String
})
//ddeer khai bao cac field co trong object 
var Booking=mongoose.model('Booking',booking_Schema,'booking');
module.exports =Booking;