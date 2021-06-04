const { authJwt } = require("../middlewares");
const express = require("express");
const controller = require("../controllers/reservation.controller");
var router = express.Router();

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/reservations", (req, res, next) => {console.log("coucou");next()},controller.getAll);
    app.post("/reservations",controller.addOne);
    app.delete("/reservations",controller.deleteAll);

    app.get("/reservations/:id",controller.getOne);
    app.put("/reservations/:id",controller.updateOne);
    app.delete("/reservations/:id",controller.deleteOne);
};
