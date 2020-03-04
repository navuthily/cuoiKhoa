var Booking = require('../model/booking.model');
module.exports.index=function(req,res){
   Booking.find().then(function(booking){
     res.json(booking);
 //add desk-name by post of admin
   })
}
var Desk = require('../model/desk.model');

module.exports.desk = function (req, res) {
   Desk.find().then(function (desk) {
      res.json(desk.map(function (x) {
         return x.name_table;
      }))
   })
}
   
  
var Student = require('../model/student.model');
module.exports.student = function (req, res) {
   Student.find().then(function (student) {
    res.json( student.map(function(x){
         return x.name_student;
     }))
   })
}