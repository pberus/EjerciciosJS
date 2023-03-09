let miNombre = prompt("Cual es mi nombre?")

let miApellido = prompt("Cual es mi apellido?")

let miEdad = prompt("Cual es mi edad?")

let miMascota = prompt("Cual era el nombre de mi mascota?")

let edadMascota = prompt("Cuantos años tenia mi mascota?")

let nombreCompleto = miNombre + " " + miApellido

let textoPresentacion = "Mi nombre es " + miNombre + ", mi apellido es " + miApellido + " y tengo " + miEdad + " años de edad. El nombre de mi mascota era " + miMascota + " y tenia " + edadMascota + " años de edad."

let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(nombreCompleto)
console.log(textoPresentacion)
console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

//Ejercicio 11
let alumno = {
    nombre: miNombre,
    edad: miEdad,
    estudiante: true,
    curso: "JavaScript",
    task: 2,
}
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.estudiante)
console.log(alumno.curso)
console.log(alumno.task)

//Ejercicio 12
let mascota = {
    nombre: miMascota,
    edad: edadMascota,
    animal: "perro",
    raza: "caniche",
    sexo: "macho",
}
console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.animal)
console.log(mascota.raza)
console.log(mascota.sexo)

//Ejercicio 13
const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Durazno"]
console.table(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//Ejercicio 14
const numeros = [1,2,3,4,5]
console.table(numeros)
console.log(numeros[0]) 
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//Ejercicio 15
const familia = [
    {
        nombre: "Pedro",
        edad: 21,
        integrante: "Yo",
    },
    {
        nombre: "Juan",
        edad: 20,
        integrante: "Hermano",
    },
    {
        nombre: "Morena",
        edad: 18,
        integrante: "Hermana",
    },
    {
        nombre: "Angelica",
        edad: 54,
        integrante: "Mama",
    },
    {
        nombre: "Ariel",
        edad: 54,
        integrante: "Papa",
    }
]
console.table(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//Ejercicio 16
let textoAleatorio = frutas[1] + numeros[3] + familia[4]
console.log(textoAleatorio)

//Ejercicio 17
let edadCompañero = prompt("Cual es la edad de mi compañero?")
let edadesIguales = miEdad == edadCompañero
let soyMayor = miEdad > edadCompañero
let soyMenor = miEdad < edadCompañero
console.log("Mi edad es igual a la de mi compañero: " + edadesIguales)
console.log("Mi edad es mayor a la de mi compañero: " + soyMayor)
console.log("Mi edad es menor a la de mi compañero: " + soyMenor)

//Ejercicio 18
let soyMayorDeEdad = miEdad >= 18
console.log("Soy mayor de edad: " + soyMayorDeEdad)

//Ejercicio 19
let edadPersona = prompt("Introducir edad persona")
let alturaPersona = prompt("Introducir altura persona")
let puedeSubir = (edadPersona > 6) && (alturaPersona > 120)
console.log("Puede subir a la atraccion: " + puedeSubir)

//Ejercicio 20
let pasePersona = prompt("Introduzca su pase")
let saldoPersona = prompt("Introduzca su saldo")
let puedePasar = (pasePersona == "VIP") || (saldoPersona > 1000)
console.log("La persona puede pasar: " + puedePasar)
