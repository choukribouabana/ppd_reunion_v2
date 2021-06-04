const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salleSchema = new Schema(
{
numsalle: { type: Number },
Organisation: { type: String },
etage: { type: Number },
capacite: { type: Number },
Handicape: { type: String },
DataShow: { type: String },
Tableau: { type: String },
},
{ collection: "salles", timestamps: true}
);

module.exports= mongoose.model("Salle", salleSchema);
