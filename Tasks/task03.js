var x = 10;
console.log("var x:", x);

let y = 20;
console.log("let y:", y);

const z = 30;
console.log("const z:", z);

// Explanation:
 console.log("`var` is function-scoped and can be re-declared or updated.");
 console.log("`let` is block-scoped and can be updated but not re-declared within the same scope.");
 console.log("`const` is block-scoped and cannot be re-declared or updated.");
