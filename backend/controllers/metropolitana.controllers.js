import { tabla_Metropolitana } from "../models/metropolitana.models.js";

tabla_Metropolitana.create({
    Alumno: "Juan Pérez",
    Calificacion: 8.5,
    Materia: "Español"
})

tabla_Metropolitana.create({
    Alumno: "María Gómez",
    Calificacion: 9.2,
    Materia: "Matematicas"
})

tabla_Metropolitana.create({
    Alumno: "Carlos Rodríguez",
    Calificacion: 7.8,
    Materia: "Historia"
})

tabla_Metropolitana.create({
    Alumno: "Guillermo Martinez",
    Calificacion: 7.8,
    Materia: "Ciencias"
})


export const test = () => {
    console.log("Si se esta llamando al controlador correcto")
}