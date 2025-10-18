/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

    class Vehicle {
        constructor(type, brand){
            this.type = type
            this.brand = brand
        }

        check_vehicle_details() {
            console.log(`Vehicle type: ${this.type}, brand: ${this.brand}`)
        }

        // Método adicional que utiliza las propiedades
        start() {
            console.log(`${this.brand} ${this.type} is starting...`)
        }

        static showBrand(vehicle) {
            if(vehicle && vehicle.brand){
            console.log(`The brand is ${vehicle.brand}`)
            }else{
                console.log("The brand is not provided")
            }
        }
    }

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

    let vehicle1 = new Vehicle("car", "toyota")
    vehicle1.check_vehicle_details()
    vehicle1.start()

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

    Vehicle.showBrand(vehicle1)

// 6. Crea una clase que haga uso de herencia

    class Bicycle extends Vehicle {
        
        constructor(type, brand, priceRange){
            super(type, brand)
            this.priceRange = priceRange
        }

        // Sobrescribe el método check_vehicle_details
        check_vehicle_details() {
            console.log(`Bicycle brand: ${this.brand}, price range: ${this.priceRange}`);
        }

        pedal() {
            console.log("The bicycle is pedaling...");
        }
    }

    const bike = new Bicycle("mountain", "specialized", "medium")
    bike.check_vehicle_details()
    bike.pedal()

// 7. Crea una clase que haga uso de getters y setters

    class Animal{

        #specie
        #behaviour

        constructor(specie, behaviour){
            this.specie = specie // Usar el setter en lugar de asignar directamente
            this.behaviour = behaviour // Usar el setter en lugar de asignar directamente
        }

        get specie() {
            return this.#specie
        }

        set specie(specie) {
            this.#specie = specie
        }

        get behaviour() {
            return this.#behaviour
        }

        set behaviour(behaviour){
            this.#behaviour = behaviour
        }

    }

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

    let animal1 = new Animal("tiger", "dangerous")
    console.log(`Specie: ${animal1.specie}, Behaviour: ${animal1.behaviour}`)

    animal1.specie = "shark"
    animal1.behaviour = "aggressive"
    console.log(`Updated Specie: ${animal1.specie}, Updated Behaviour: ${animal1.behaviour}`)

// 10. Sobrescribe un método de una clase que utilice herencia

     bike.check_vehicle_details();
