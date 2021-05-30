const Reservation = require("../models/reservation.model");
let controller={
    getAll: async (req, res, next) => {
        let reservations = await Reservation.find({});res.json(reservations);},

    addOne: async (req, res, next) => {
        let reservation = await Reservation.create(req.body)
        res.json(reservation);},

    deleteAll: async (req, res, next) => {
        let resp = await Reservation.remove({});
        res.json(resp);},
    getOne: async (req, res, next) => {
        let reservation = await Reservation.findById(req.params.id);
        res.json(reservation);},
    updateOne: async (req, res, next) => {
        let reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body,{ new:true });
        res.json(reservation);},
    deleteOne: async (req, res, next) => {
        let resp = await Reservation.findByIdAndRemove(req.params.id);
        res.json(resp);},
};

module.exports = controller;
