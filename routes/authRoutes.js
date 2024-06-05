const express = require('express');
const router = express.Router();
const {registerControler,loginControler} = require('../controllers/authController');


router.post('/register',registerControler)
router.post('/login',loginControler)

module.exports = router;