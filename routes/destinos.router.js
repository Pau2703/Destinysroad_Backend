const express = require("express")
const router = express.Router()
const destinosController = require("../controllers/destinos.controller")  //Conexión a controllers

router.post("/", destinosController.create) //Crear lo que está en destinos controller.
router.get("/", destinosController.find) //Guardar lo que está en destinos controller.
router.get("/:id", destinosController.findOne) //Encontrar uno, lo que está en destinos controller.
router.put("/:id", destinosController.update) //Modificar lo que está en destinos controller.
router.delete("/:id", destinosController.remove) //Eliminar lo que está en destinos controller.

module.exports = router