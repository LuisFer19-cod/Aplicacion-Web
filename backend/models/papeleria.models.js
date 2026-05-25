import { Schema, model } from "mongoose"; //Schema es el modelo de una tabla, model es la tabla
 const EsquemaPapeleria = new Schema({
    Producto: String,
    Stock: Number,
    Precio: Number
 })

 export const tabla_Papeleria = new model("Tabla de papelería", EsquemaPapeleria)