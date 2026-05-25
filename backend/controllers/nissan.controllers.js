import { tabla_Empleados } from "../models/nissan.models.js";

tabla_Empleados.create({
    NoEmpleado: "87542",
    Nombre: "Isaac Huizar",
    Sueldo: 50000
})

tabla_Empleados.create({
    NoEmpleado: "66985",
    Nombre: "Luis Sanchez",
    Sueldo: 45000
})

tabla_Empleados.create({
    NoEmpleado: "54268",
    Nombre: "Patricio Insaurralde",
    Sueldo: 80000
})

export const test = () => {
    console.log("Si se esta llamando al controlador correcto")
}