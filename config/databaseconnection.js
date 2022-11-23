const mongoose = require("mongoose"); //Importar la dependencia mongoose.

const host = "localhost";
const port = "27017"; //Declaración del puerto
const db = "dbproyecto"; //Declaración de la base de datos

 //Traer un proceso de conexión que utilice el host, el puerto y una base de datos
exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb+srv://root:33d6!DKdbHrE!9p@cluster0.pxm0dba.mongodb.net/?retryWrites=true&w=majority`; 
    mongoose.connect(mongoStringConnection);  
    //Configuración para conectarse a Mongo
    mongoose.Promise = global.Promise;
    const dbConnection =  mongoose.connection;
    dbConnection.on("error", console.error.bind
    (console, " Mongodb connection error"))

}