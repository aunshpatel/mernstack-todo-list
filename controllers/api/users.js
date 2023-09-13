const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken,
  getUserByID,
  updateUser
};

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

async function getUserByID(req, res) {
  const user = await User.findById(req.params.id);
  res.json(user);
}

async function updateUser(req, res) {
  var profileData = {
      name: req.body.name,
      email: req.body.email,
  };
  console.log("ProfileData:"+profileData);
  const updatedUser = await User.findByIdAndUpdate(req.user._id, profileData, {new:true});
    console.log("Updated user: "+updatedUser);
    const token = createJWT(updatedUser);
    console.log("token new:"+token)
    // localStorage.setItem('token', token);
    // res.json(token);
  res.json(token);
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}