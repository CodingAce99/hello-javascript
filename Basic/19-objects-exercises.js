/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

    let computer = {
        brand: "Apple",
        model: "Air",
        size: 15
    }

// 2. Accede y muestra su valor

    console.log(computer.brand)
    console.log(computer.model)
    console.log(computer.size)

// 3. Agrega una nueva propiedad

    computer.cpu = "M3"

// 4. Elimina una de las 3 primeras propiedades

    delete computer.size

// 5. Agrega una función e invócala

    computer.performance = function () {
        console.log("El rendimiento en juegos es excelente")
    }

// 6. Itera las propiedades del objeto

    for (let key in computer){
        console.log(key + ": " + computer[key])
    }

// 7. Crea un objeto anidado

    let computer2 = {
        brand: "Apple",
        model: "Macbook Pro",
        size: 14,
        processor: {
            serie: "M",
            model: "M4 pro",
            arquitecture: "ARM",
            performance: function() {
                console.log(`Performace on ${this.brand} computers is excellent with outstanding battery life`)
            }
        }
    }

// 8. Accede y muestra el valor de las propiedades anidadas

    console.log(computer2)

// 9. Comprueba si los dos objetos creados son iguales

    console.log(computer == computer2)
    console.log(computer === computer2)

// 10. Comprueba si dos propiedades diferentes son iguales

    console.log(computer.brand == computer2.brand)
    console.log(computer.brand === computer2.brand)