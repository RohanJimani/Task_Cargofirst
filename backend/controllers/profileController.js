const User = require("../models/User");

// Get profile
const getProfile = async (req, res) => {
  res.json(req.user);
};

// Update profile
const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.fullName = req.body.fullName || user.fullName;
    await user.save();
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = { getProfile, updateProfile };
