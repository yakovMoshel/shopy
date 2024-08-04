const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const User = require('../DL/Models/userModel');

async function login(email, password) {
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    console.log('User not found with email:', email);
    throw new Error('Login failed');
  }

  const passwordMatch = await bcryptjs.compare(password, user.password);
  if (!passwordMatch) {
    console.log('Incorrect password for user:', email);
    throw new Error('Login failed');
  } else {
    console.log('Successfully logged in');
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.SECRET_CODE, { expiresIn: "30d" });
  return token;
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.SECRET_CODE, (err, user) => {
    if (err) {
      console.log('Error verifying token:', err);
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}

module.exports = { login, authenticateToken };
