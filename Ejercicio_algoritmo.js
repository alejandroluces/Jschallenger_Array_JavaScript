function multiplyIngredients(array, N) {
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
      for (let prop in obj) {
        if (prop === "ingredients") {
          const ingredients = obj[prop];
          for (let ingredient in ingredients) {
            if (typeof ingredients[ingredient] === "number") {
              ingredients[ingredient + "_result"] = ingredients[ingredient] * N;
            }
          }
        }
      }
    }
    return array;
  }
  
  const panaderia = [
    {
      "id": 1,
      "name": "frances",
      "ingredients": {"harina" : 1000, "azucar" : 100, "sal": 20, "levadura": 20, "mantequilla": 40, "aceite": 20, "agua": 430},
      "peso": 50,
      "unidades": 32
    },
    {
      "id": 2,
      "name": "holandes",
      "ingredients": {"harina" : 1000, "azucar" : 100, "sal": 20, "levadura": 20, "mantequilla": 40, "aceite": 20, "agua": 430},
      "peso": 45,
      "unidades": 35
    },
    {
      "id": 3,
      "name": "campesino",
      "ingredients": {"harina" : 1000, "azucar" : 100, "sal": 20, "levadura": 20, "mantequilla": 40, "aceite": 20, "agua": 430},
      "peso": 400,
      "unidades": 4
    }
  ];
  
  console.log(multiplyIngredients(panaderia, 5));