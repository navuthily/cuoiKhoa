var mongoose = require('mongoose');
var student_Schema = new mongoose.Schema({
   name_student: String
})
var Student = mongoose.model('Student', student_Schema, 'students');
module.exports = Student;