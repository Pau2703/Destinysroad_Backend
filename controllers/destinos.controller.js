const Destino = require("../models/destinos.model")
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let destino = new Destino({
        nombre: req.body.nombre,
        precio_carro: req.body.precio_carro,
        precio_van: req.body.precio_van,
        imagen: req.body.imagen
    })


    destino.save(function(err){
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al guardar el destino"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El destino se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req, res){
    Destino.find(function(err, destinos){
        res.json(destinos)
    })
}
exports.findOne = function(req, res){
    Destino.findOne({_id: req.params.id},function(err, destino){
        res.json(destino)
    })
}

exports.update = function(req, res){
let destino = {
    nombre: req.body.nombre,
    precio_carro: req.body.precio_carro,
    precio_van: req.body.precio_van,
    imagen: req.body.imagen

}

Destino.findByIdAndUpdate(req.params.id,{$set: destino}, function(err){
    if(err){
        console.error(err),
        response.exito = false, 
        response.msg = "Error al modificar el destino"
        res.json(response)
        return;
    }
    response.exito = true,
        response.msg = "El destino se modificó correctamente"
        res.json(response)
    })

}
exports.remove = function(req, res){
    Destino.findByIdAndRemove({_id: req.params.id},function(err, destino){
        if(err){
            console.error(err),
            response.exito = false, 
            response.msg = "Error al eliminar  el destino"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El destino se eliminó correctamente"
            res.json(response)
        })
}