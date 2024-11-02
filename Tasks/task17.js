let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.push("Pineapple");
console.log("After adding Pineapple:", fruits);

fruits.splice(1, 1); 
console.log("After removing Banana:", fruits);

fruits[2] = "Strawberry";
console.log("After updating Mango to Strawberry:", fruits);
