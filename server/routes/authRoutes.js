const express = require('express');
const router = express.Router();const { registerController, loginController, ratingController, fetchRatingController, recommendationController } = require('../controllers/authController');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/rating', ratingController);
router.get('/rating/:placeId', fetchRatingController);
router.post('/recommendations', recommendationController);

module.exports = router;
