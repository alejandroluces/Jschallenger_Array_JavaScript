// Combinar dos matrices con valores duplicados

// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. 
// Sort the merge result in ascending order. Return the resulting array

// Escribe una función que tome dos matrices como argumentos. Combine ambas matrices y elimine los valores duplicados. 
// Ordene el resultado de la fusión en orden ascendente. Devolver la matriz resultante

function myFunction(a,b) {


    return [...new Set(a.concat(b))].sort((x,y) => x - y);
    
    // Otra forma de hacerlo
    // return a.concat(b).sort((x,y) => x - y).filter((item, index, array) => array.indexOf(item) === index);

    // otra manera de hacerlo:
    // return [...new Set(a.concat(b))].sort((x,y) => x - y);

    // Otra manera de hacerlo:
    // return Array.from(new Set(a.concat(b))).sort((x,y) => x - y);


  }

  console.log(myFunction([1, 2, 3], [3, 4, 5]));
  console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
  
  