
// Combinar un número arbitrario de matrices

// Write a function that takes arguments an arbitrary number of arrays. 
// It should return an array containing the values of all arrays.

// Escribe una función que tome argumentos en un número arbitrario de arreglos. 
// Debería devolver una matriz que contenga los valores de todas las matrices.




function myFunction(...arrays ) {
    return arrays.flat();
  }

  console.log(myFunction([1, 2, 3], [4, 5, 6]));
  console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));
  console.log(myFunction([true, true], [1, 2], ['a', 'b']));
  

  
  
