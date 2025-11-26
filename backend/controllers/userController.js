const User = require('../models/User');

// @desc    Get user profile
// @route   GET /api/users/:userId
// @access  Public (should be private)
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const user = await User.findById(userId).select('-password').lean();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

// @desc    Update user profile
// @route   PATCH /api/users/:userId
// @access  Public (should be private)
const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const body = req.body;

    // Validate that at least one field is being updated
    if (Object.keys(body).length === 0) {
      return res.status(400).json({ error: 'At least one field must be provided for update' });
    }

    // Update user profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: body },
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
