const db = require("../models");
const User = db.user;
const Role = db.role;
exports.getAll = async (req, res, next) => {
  let users = await User.find({});
   res.json(users)
};


exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
exports.deleteOne = async (req, res, next) => {
  let resp = await User.findByIdAndRemove(req.params.id);
  res.json(resp);};
