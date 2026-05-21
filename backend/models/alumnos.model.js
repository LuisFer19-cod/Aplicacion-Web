import { Schema, model } from "mongoose"; //Schema es el modelo de una tabla, model es la tabla
 const EsquemaAlumnos = new Schema({
    nombre: String,
    calificacion: Number,
    materia: String
 })

 export const tabla_Alumnos = new model("Tabla de alumnos reprobados", EsquemaAlumnos)