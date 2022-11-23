const express = require("express")
const router = express.Router()
const reservasController = require("../controllers/reservas.controller")  //Conexión a controllers

router.post("/", reservasController.create) //Crear lo que está en reservas controller.
router.get("/", reservasController.find) //Guardar lo que está en reservas controller.
router.get("/:id", reservasController.findOne) //Encontrar lo que está en reservas controller.
router.put("/:id", reservasController.update) //Modificar lo que está en reservas controller.
router.delete("/:id", reservasController.remove) //Eliminar lo que está en reservas controller.

module.exports = router