// Function Declaration
function square(num) {
    return num * num;
  }
  console.log(square(8));
  
  // Function Expression
  const squareExp = function(num) {
    return num * num;
  };
  console.log(squareExp(4));
  
  // Arrow Function
  const squareArrow = num => num * num;
  console.log(squareArrow(5));
  