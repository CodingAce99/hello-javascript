/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let strings = ["HTML", "CSS", "Coding", "JavaScript", "Python"]

//map
let convertMayus = strings.map(element => element.toUpperCase())
console.log(convertMayus)

//filter
let searchLessThan5 = strings.filter(element => element.length < 5)
console.log(searchLessThan5)

//reduce

let countTotalLength = strings.reduce((previous, current) => previous + current.length, 0)
console.log(countTotalLength)


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let numbers = [1, 2, 3, 4, 5, 6]

let newArray = [...numbers.map(element => element ** 2).filter(element => element % 2 === 0)]

console.log(newArray)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let nombresAnidados = [
    ["Ana", "Luis"],
    ["Marta", "Juan"],
    ["Antonio"]
]

const todos = nombresAnidados.flat();
console.log(todos)

const paresDuplicados = numbers.flatMap(n => n % 2 === 0 ? [n, n] : [])
console.log(paresDuplicados)

// 4. Ordena un array de números de mayor a menor

let randomNumbers = [3, 6, 1, 8, 4, 9]
let sorted = [...randomNumbers].sort((a, b) => b - a)
console.log(sorted)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const mySet1 = new Set([1, 3, 4, 5, 7, 9, 0])
const mySet2 = new Set([2, 4, 6, 7, 8, 9])

const union = new Set([...mySet1, ...mySet2])
console.log("union: ", union)

const intersection = new Set([...mySet1].filter(element => mySet2.has(element)))
console.log("intersection: ", intersection)

const difference = new Set([...mySet1].filter(element => !mySet2.has(element)))
console.log("difference: ", difference)


// 6. Itera los resultados del ejercicio anterior

console.log("Iterando union: ");
union.forEach(element => console.log(element))

console.log("Iterando intersection: ");
intersection.forEach(element => console.log(element))

console.log("Iterando difference: ");
difference.forEach(element => console.log(element))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

let users = new Map();

users.set(1, { name: "Juan", age: 25, email: "juan@gmail.com" });
users.set(2, { name: "Pedro", age: 32, email: "pedro@gmail.com" });
users.set(3, { name: "Marta", age: 21, email: "marta@gmail.com" });

users.forEach((user, id) => {
    console.log(`ID: ${id}, Nombre: ${user.name}, Edad: ${user.age}, Email: ${user.email}`);
});


// 8. Dado el mapa anterior, crea un array con los nombres

const arrayFromMap = Array.from(users.values(), user => user.name);
console.log(arrayFromMap);


// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

const arrayFromMap2 = Array.from(users.values()).filter(user => user.age >= 18).map(user => user.email);
const emailSet = new Set(arrayFromMap2);
console.log(emailSet);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

//Convertir mapa a Objeto:
const objectFromMap = Object.fromEntries(users)

//Declaramos nuevo Map
const usersByEmail = new Map()

//Guardamos los usuarios en el nuevo Map usando email como clave
Object.values(objectFromMap).forEach(user => {
    usersByEmail.set(user.email, user)
})

//Mostramos los datos del nuevo Mapa
usersByEmail.forEach((userData, email) => {
    console.log(`Email: ${email} | Datos:`, userData)
})

