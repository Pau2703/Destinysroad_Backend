const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservasSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    correo:{type: String, required: true, max:1000},
    cedula:{type: Number, required: true, max:700000000 },
    precio_total:{type: Number, requires: true, max: 120000000},
    destino:{type: String, requires: true, max: 1200},
    tipo:{type: String, requires: true, max: 1200},
    fecha:{type: String, required: true, max:1000},
    hora:{type: String, required: true, max:1000}
    
})

module.exports = mongoose.model("Reservas", ReservasSchema)