const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
    {
        name: { type: String },
        salle: { type: String },
        startDateTime: { type: String },
        endDateTime: { type: String },
        classes: { type: String },
    },
    { collection: "reservations", timestamps: true}
);

module.exports= mongoose.model("Reservation", reservationSchema);
