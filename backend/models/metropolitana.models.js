import { Schema, model } from "mongoose"; //Schema es el modelo de una tabla, model es la tabla
 const EsquemaMetropolitana = new Schema({
    Alumno: String,
    Calificacion: Number,
    Materia: String
 })

 export const tabla_Metropolitana = new model("Tabla de metropolitana", EsquemaMetropolitana)