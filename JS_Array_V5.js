// Write a function that takes an array (a) and a number (n) as arguments. 
// It should return the last n elements of a.


// Escribe una función que tome una matriz (a) y un número (n) como argumentos. 
// Debería devolver los últimos n elementos de a.


const myFunction =(a,n) =>{

    return a.splice(-n)

}

console.log(myFunction([1, 2, 3, 4, 5], 2));
console.log(myFunction([1, 2, 3], 6));
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));