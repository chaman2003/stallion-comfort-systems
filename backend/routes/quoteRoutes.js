const express = require('express');
const router = express.Router();
const {
  getQuotes,
  createQuote,
  getQuoteById,
  updateQuote,
  deleteQuote,
} = require('../controllers/quoteController');

router.route('/').get(getQuotes).post(createQuote);
router.route('/:id').get(getQuoteById).patch(updateQuote).delete(deleteQuote);

module.exports = router;
