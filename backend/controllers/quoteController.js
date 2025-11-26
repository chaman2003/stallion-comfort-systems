const Quote = require('../models/Quote');

// @desc    Get quotes for a user
// @route   GET /api/quotes
// @access  Public (should be private)
const getQuotes = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const quotes = await Quote.find({ userId })
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      quotes,
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
};

// @desc    Create a quote
// @route   POST /api/quotes
// @access  Public
const createQuote = async (req, res) => {
  try {
    const { userId, items, description, totalEstimatedPrice, customerNotes, urgency, preferredContactMethod } = req.body;

    if (!userId || !items || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'At least one item is required' });
    }

    const quote = await Quote.create({
      userId,
      items,
      description,
      totalEstimatedPrice,
      customerNotes,
      urgency: urgency || 'medium',
      preferredContactMethod: preferredContactMethod || 'email',
      status: 'pending',
    });

    res.status(201).json({
      success: true,
      message: 'Quote created successfully',
      quote,
    });
  } catch (error) {
    console.error('Error creating quote:', error);
    res.status(500).json({ error: 'Failed to create quote' });
  }
};

// @desc    Get a single quote
// @route   GET /api/quotes/:id
// @access  Public
const getQuoteById = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id).lean();

    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.json({
      success: true,
      quote,
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
};

// @desc    Update a quote
// @route   PATCH /api/quotes/:id
// @access  Public
const updateQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.json({
      success: true,
      message: 'Quote updated successfully',
      quote,
    });
  } catch (error) {
    console.error('Error updating quote:', error);
    res.status(500).json({ error: 'Failed to update quote' });
  }
};

// @desc    Delete a quote
// @route   DELETE /api/quotes/:id
// @access  Public
const deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id);

    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.json({
      success: true,
      message: 'Quote deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting quote:', error);
    res.status(500).json({ error: 'Failed to delete quote' });
  }
};

module.exports = {
  getQuotes,
  createQuote,
  getQuoteById,
  updateQuote,
  deleteQuote,
};
