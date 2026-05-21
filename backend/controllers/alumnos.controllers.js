import { tabla_Alumnos } from "../models/alumnos.model.js";

tabla_Alumnos.create({
    nombre: "Superfan",
    calificacion: 6,
    materia: "Apps Web Orientadas a Servicios"
})

export const test = () => {
    console.log("Si se esta llamando al controlador correcto")
}