//NON-BLOCKING

//reminds you that it has been 10 seconds in the console
//but will show after 10 seconds despite being written first on the console
setTimeout(() => {
    console.log("It has been 10 seconds");
}, 10000);

//reminds you that it has been 5 seconds in the console, 
// but will show first despite being written on the second one
setTimeout(() => {
    console.log("It has been 5 seconds");
}, 5000);


//BLOCKING
//This will run first. This will block the next code
console.log("I go first")

//This will only show on the console ones that the first one appears
console.log("I will go next")