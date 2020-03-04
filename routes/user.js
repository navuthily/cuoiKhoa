const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Desk = require('../model/desk.model');
const Booking = require('../model/booking.model');
const Student = require('../model/student.model');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
   extended: true
}));
var name_student;
router.get('/login_user', async (req, res) => {
   const stu = await Student.find();
   var myArr = [];
   for (let i of stu) {
      myArr.push(i.name_student);
   }
   res.render('users/login', {
      name_student
   });
});
router.get('/booking',
   async (req, res) => {
      const desks = await Desk.find();
      res.render('users/booking');
   });
router.post('/booking', async (req, res) => {
   await Booking.create({

   });
})
router.get('/login_users',
   function (req, res) {
      res.send("Hay nhap lai")
   }
)
router.post('/login_user/', async (req, res) => {
   var stu;  
   stu = await Student.find();
   var myArr = [];
   var a = req.body.stu;
   var a=req.query.a;
   for (let i of stu) {
      myArr.push(i.name_student);
   }
   if (myArr.find(element => element == req.body.stu)) {
  
      var student =req.body.stu;
   
      const desks = await Desk.find();
      res.render('users/booking', {student,
         desks
      });
      await Booking.create({
         student_id:student
      });
   } else {
      res.redirect('/login_users');
   }
});
module.exports = router;