const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const DestinosSchema = new Schema({
  nombre:{type: String,required: true, max:60},
  precio_carro:{type: Number,required: true, max:1000000},
  precio_van:{type: Number,required: true, max:1000000},
  imagen:{type: String,required: true},
  
})

module.exports = mongoose.model("Destinos", DestinosSchema)
