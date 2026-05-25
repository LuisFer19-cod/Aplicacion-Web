import { tabla_Papeleria } from "../models/papeleria.models.js";

tabla_Papeleria.create({
    Producto: "Cuaderno",
    Stock: 100,
    Precio: 10
})

tabla_Papeleria.create({
    Producto: "Lápiz",
    Stock: 200,
    Precio: 5
})

tabla_Papeleria.create({
    Producto: "Borrador",
    Stock: 150,
    Precio: 3
})

export const test = () => {
    console.log("Si se esta llamando al controlador correcto")
}