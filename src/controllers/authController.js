const User = require('../models/User');
const generateToken = require('../utils/generateToken');

/**
 * @desc Register a new user
 * @route POST /api/auth/register
 */
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  // create user on database database
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already exists' });

  // create user on database
  await User.create({ name, email, password });

  // return response
  res.status(201).json({
    success: true,
    message: 'Regestration Success',
  });
};

/**
 * @desc Login user
 * @route POST /api/auth/login
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // search for the existing user
  const user = await User.findOne({ email });

  // if no user found or password not matched
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // return response
  res.status(200).json({
    success: true,
    message: 'Login Success',
    token: generateToken(user._id, user.name),
  });
};

/**
 * @desc Get current user's profile
 * @route GET /api/auth/me
 * @access Private
 */
exports.getMe = async (req, res) => {
  // get id from context.user
  const { id } = req.context.user;

  // fetch the user from db
  const user = await User.findById(id).select('-password -__v');

  // return response
  res.status(200).json({
    success: true,
    message: 'Profile Fetched Success',
    data: user,
  });
};
