// Comprobar si todos los elementos de la matriz son iguales

// Write a function that takes an array as argument. It should return true if all elements in the array are equal. 
// It should return false otherwise.

// Escribe una función que tome una matriz como argumento. Debería devolver verdadero si todos los elementos de la matriz son iguales. 
// De lo contrario, debería devolver falso.

/*
Esta es otro forma de hacerlo


function myFunction(arr) {
    return arr.every((cur) => cur === arr[0]);

}



*/

function myFunction( arr ) {
    return new Set(arr).size === 1
  }

console.log(myFunction([true, true, true, true]));
console.log(myFunction(['test', 'test', 'test']));
console.log(myFunction([1,1,1,2]));
console.log(myFunction(['10',10,10,10]));











