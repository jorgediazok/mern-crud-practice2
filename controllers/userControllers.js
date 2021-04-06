const User = require('../models/user');
const bcrypt = require('bcryptjs');
const Joi = require('joi');

exports.signup = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).email().required(),
    password: Joi.string().min(6).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //

  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) return res.status(400).send('User already exists.');

    const { name, email, password } = req.body;

    user = new User({
      name,
      email,
      password,
    });

    //Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    //Save user
    await user.save();

    res.send('User created.');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
