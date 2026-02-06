const User = require('../models/User');

// SIGN UP
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ name, email, password });

  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
  });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
  });
};
