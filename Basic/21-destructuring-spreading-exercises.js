/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

    let myArray = [1, 2, 3, 4];

    let [myValue1, myValue2] = myArray;

    console.log(myValue1);
    console.log(myValue2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

    let [myValue3 = 0, myValue4 = 0, myValue5 = 0, myValue6 = 0, myValue7 = 0] = myArray;

    console.log(myValue3);
    console.log(myValue4);
    console.log(myValue5);
    console.log(myValue6);
    console.log(myValue7);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

    let person = {
        name: "Hector",
        age: "24",
        alias: "Depredator47"
    }

    let {name, age, alias} = person;

    console.log(name);
    console.log(age);
    console.log(alias);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

    let {name: name2, age: age2, alias: alias2} = person;

    console.log(name2);
    console.log(age2);
    console.log(alias2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

    let person2 = {
        name: "Jose",
        age: 55,
        job: {
            position: "head of Cargua department",
            company: "Balearia",
        }
    }

    let {job: {position: jobName, company: companyName }} = person2

    console.log(jobName);
    console.log(companyName);

// 6. Usa propagación para combinar dos arrays en uno nuevo

    let myArray2 = ["Spain", "Italy", "Germany"];

    let newArray = [...myArray, ...myArray2];

    console.log(newArray);

// 7. Usa propagación para crear una copia de un array

    let myArrayCopy = [...myArray2];

    console.log(myArrayCopy);

// 8. Usa propagación para combinar dos objetos en uno nuevo

    let newObject = {...person, ...person2};

    console.log(newObject);

// 9. Usa propagación para crear una copia de un objeto

    let personCopy = {...person2};

    console.log(personCopy);

// 10. Combina desestructuración y propagación

    let {name:name3, age:age3, ...details} = person2;

    console.log(name3);
    console.log(age3);
    console.log(details);