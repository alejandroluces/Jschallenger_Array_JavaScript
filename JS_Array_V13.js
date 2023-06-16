// Write a function that takes an array of strings as argument. 
// Return the longest string.


// // Escriba una función que tome una matriz de cadenas como argumento. 
// Devuelve la cadena más larga. Usa el metodo de reducción.



function myFunction(arr) {
    return arr.reduce((acc, cur) => acc.length > cur.length ? acc : cur);
}




console.log(myFunction(['help', 'me']));
console.log(myFunction(['I', 'need', 'candy']));

