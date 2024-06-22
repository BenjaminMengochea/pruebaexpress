const express = require("express");
const morgan = require ("morgan");
const database = require( "./database");

//Configuracion Inicial
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("escuchando comunicaciones al puerto"+app.get("port"));

//MiddleWares
app.use(morgan("dev"));

//Rutas
app.get("/productos", async (req,res)=>{
    const connection = await database.getconnection()
    const result = await connection.query("SELECT * from producto");
    res.json(result)
})