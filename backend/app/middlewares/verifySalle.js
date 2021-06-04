const db = require("../models");
const Salle = db.salle;

checkDuplicateSalle = (req, res, next) => {
  // Username
  Salle.findOne({
    numsalle: req.body.numsalle
  }).exec((err, salle) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (salle) {
      res.status(400).send({ message: "Erreur! le numéro de salle est deja attribué" });
      return;
    }
next();
    // Email
  });
};

const verifySalle = {
  checkDuplicateSalle
};

module.exports = verifySalle;