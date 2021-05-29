const Salle = require("../models/salles.model");
let controller={
    getAll: async (req, res, next) => {
        let salles = await Salle.find({});res.json(salles);},

    addOne: async (req, res, next) => {
        let salle = await Salle.create(req.body)
        res.json(salle);},

    deleteAll: async (req, res, next) => {
        let resp = await Salle.remove({});
        res.json(resp);},
    getOne: async (req, res, next) => {
        let salle = await Salle.findById(req.params.id);
        res.json(salle);},
    updateOne: async (req, res, next) => {
        let salle = await Salle.findByIdAndUpdate(req.params.id, req.body,{ new:true });
        res.json(salle);},
    deleteOne: async (req, res, next) => {
        let resp = await Salle.findByIdAndRemove(req.params.id);
        res.json(resp);},
   };
   
   module.exports = controller;
   