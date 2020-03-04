const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Desk = require('../model/desk.model');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
   extended: true
}));
router.get('/admin/edit', async (req, res) => {
   const desks = await Desk.find();
   res.render('admin/desk', {
      desks
   });

});
router.post('/admin/edit', async (req, res) => {
   const name_table = req.body;
    await Desk.create(name_table);
});

module.exports = router;