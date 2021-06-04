const { authJwt } = require("../middlewares");
const express = require("express");
const controller = require("../controllers/salles.controller");
var router = express.Router();
const { verifySalle } = require("../middlewares");
 module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/salles", (req, res, next) => {console.log("coucou");next()},[authJwt.verifyToken,authJwt.isAdmin] ,controller.getAll);
    app.post("/salles",[verifySalle.checkDuplicateSalle],controller.addOne);  
    app.delete("/salles",controller.deleteAll);
  
    app.get("/salles/:id",controller.getOne);
    app.put("/salles/:id",controller.updateOne);
    app.delete("/salles/:id",controller.deleteOne);
    };
   