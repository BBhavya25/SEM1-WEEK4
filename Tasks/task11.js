let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar);  
  console.log(localVar);   
}

testScope();
console.log(globalVar);    
// console.log(localVar);  // Unaccessible outside function (would throw an error)
