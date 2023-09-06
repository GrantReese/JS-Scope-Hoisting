// Implement a function named scopeTest that:
// Declares a variable in global scope, inside a 
// block (like an if statement), and within a function.
// Tries to access these variables from different 
// locations to see where they are and aren't accessible.
// Commit: "Demonstrated variable scope".

function sayYep(){
    const yep = "yep";
    console.log(yep);

}
sayYep()
console.log(yep)