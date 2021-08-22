const router = require('express').Router();
let User = require('../models/user.model');
const { registrationValidation, loginValidation } = require('../validations');
const bcrypt = require('bcryptjs');

//jsonwebtoken is provided when the user logged in and
// is used to know if the user is logged in or not.
const jwt = require('jsonwebtoken');

//Registratoin
router.post('/register', async (req, res) => {
  //LETS VALIDATE THE DATA BEFORE WE MAKE A USER
  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECKING IF THE USER ALREADY EXISTS IN THE DATABASE
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send('Email Already Registerd');

  //GENERATING HASH PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //CREATING NEW USER
  const newUser = await new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: hashedPassword,
  });
  try {
    // const savedUser =
    await newUser.save();
    res.send({ user: newUser.name });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  //LOGIN VALIDATION
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECKING IF USER ALREADY EXISTS OR NOT
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('User Not Found!');

  //CHECKING IF PASSWORD IS CORRECT FOR THAT USER OR NOT by comparing the entered passwrord with the hashpassword genreated by bcrypt
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid Password!');

  //CREATING TOKEN
  //token is send with a parameter(for now: id is send) that can be accessed in the frontend
  //along with a secret token value stored in dotenv
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
  res.header('auth-token', token).send({ token, user: user.name });
});

module.exports = router;
