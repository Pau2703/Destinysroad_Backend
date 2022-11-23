const Reserva = require("../models/reservas.model")
const {sendEmail} = require("../services/mailer")
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let reserva = new Reserva({
        nombre: req.body.name,
        correo: req.body.email,
        cedula: req.body.id,
        precio_total: req.body.precio,
        destino: req.body.destino,
        tipo: req.body.tipo,
        fecha: req.body.fecha,
        hora: req.body.hora,
    })


    reserva.save(function(err){
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al guardar la reserva"
            res.json(response)
            return;
        }
        sendEmail(req.body)
        response.exito = true,
        response.msg = "La reserva se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req, res){
    Reserva.find(function(err, reservas){
        res.json(reservas)
    })
}
exports.findOne = function(req, res){
    Reserva.findOne({_id: req.params.id},function(err, reserva){
        res.json(reserva)
    })
}

exports.update = function(req, res){
let reserva = {
    nombre: req.body.name,
    correo: req.body.email,
    cedula: req.body.id,
    precio_total: req.body.precio,
    destino: req.body.destino,
    tipo: req.body.tipo,
    fecha: req.body.fecha,
    hora: req.body.hora,
}

Reserva.findByIdAndUpdate(req.params.id,{$set: reserva}, function(err){
    if(err){
        console.error(err),
        response.exito = false, 
        response.msg = "Error al modificar la reserva"
        res.json(response)
        return;
    }
    response.exito = true,
        response.msg = "La reserva se modificó correctamente"
        res.json(response)
    })

}
exports.remove = function(req, res){
    Reserva.findByIdAndRemove({_id: req.params.id},function(err, reserva){
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al eliminar la reserva"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La reserva se eliminó correctamente"
            res.json(response)
        })
}