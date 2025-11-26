const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');

router.route('/:userId').get(getUserProfile).patch(updateUserProfile);

module.exports = router;
