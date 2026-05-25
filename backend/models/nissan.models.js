import { Schema, model } from "mongoose"; //Schema es el modelo de una tabla, model es la tabla
 const EsquemaEmpleados = new Schema({
    NoEmpleado: String,
    Nombre: String,
    Sueldo: Number
 })

 export const tabla_Empleados = new model("Tabla de empleados", EsquemaEmpleados)