// Calcular la suma de una matriz de números


// Escribe una función que tome una matriz de números como argumento. 
// Debería devolver la suma de los números.

// Write a function that takes an array of numbers as argument. 
// It should return the sum of the numbers.



const myFunction = (a) => {
    return a.reduce((acc,cur) => acc+cur)
    
}

console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000,1]));
console.log(myFunction([-50,0,50,200]));
















