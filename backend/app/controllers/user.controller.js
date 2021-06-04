const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getAll = async (req, res, next) => {
  let users = await User.find({}).populate("roles", "-__v");       
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

 exports.updateOne = async (req, res, next) => {

  
  const util= new User({
    _id: req.params.id,
    name: req.body.name,
    username:req.body.username,
    prenom:req.body.prenom, 
    date: req.body.date, 
    email: req.body.email, 
    poste: req.body.poste,
    password: bcrypt.hashSync(req.body.password, 8),
    roles: []
  });
  
   await Role.find(
    {
      name: { $in: req.body.roles }
    },
    (err, k) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      util.roles=k.map(role => role._id)
      }
  );
  

  //let mp = bcrypt.hashSync(req.body.password, 8);
  
let resp = User.updateOne({_id:req.params.id},util).then(
    () => {
      res.status(201).json({
        message: 'user updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
res.json(resp);

 };