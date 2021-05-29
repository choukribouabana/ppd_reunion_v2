const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salleSchema = new Schema(
{
numsalle: { type: Number },
description: { type: String },
etage: { type: Number },
capacite: { type: Number },
year: { type: Number },
},
{ collection: "salles", timestamps: true}
);

module.exports= mongoose.model("Salle", salleSchema);
