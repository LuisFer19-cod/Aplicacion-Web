import mongoose from "mongoose"; // Importa la biblioteca Mongoose para interactuar con MongoDB
import dotenv from "dotenv"; // Importa la biblioteca dotenv para cargar variables de entorno desde un archivo .env
import express from "express"; // Importa la biblioteca Express para crear un servidor web
import cors from "cors"; // Importa la biblioteca CORS para permitir solicitudes de diferentes orígenes
import { test } from "./backend/controllers/alumnos.controllers.js"; // Importa la función test desde el controlador de alumnos

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("Funcionó la base de datos"))
.catch((error) => console.log("No jalo esa madre", error))

 //Creando un servidor local
const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log("Servidor Funcionando")
})

test();