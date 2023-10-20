// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.


// NOTE: I am having trouble running my codes on jest. I followed the instructions from the syllabus, but it keeps running test that is not specific to this week's assessment. I have the codes below, but I will need to seek help from one of the instructors regarding this.


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// Pseudo code:
    //  take the number key that holds the value 15
    //  expected output: 15 is divisible by three
    //  create function = () => {} and declare it with a const
    //  use string interpolation of the object

// const object1 = { number: 15 }
// const divisibleByThree = (object1) => {
//     return `${object1.number} is divisible by three`  
// }
// console.log(divisibleByThree(object1))          // 15 is divisible by three


// Pseudo code:
    //  take the number key that holds the value 0
    //  expected output: 0 is divisible by three
    //  create function = () => {} and declare it with a const
    //  use string interpolation of the object

// const object2 = { number: 0 }
// const divisibleByThree = (object2) => {
//     return `${object2.number} is divisible by three`
// }
// console.log(divisibleByThree(object2))          // 0 is divisible by three


// Pseudo code:
    //  take the number key that holds the value -7
    //  expected output: -7 is not divisible by three
    //  create function = () => {} and declare it with a const
    //  use string interpolation of the object

// const object3 = { number: -7 }
// const divisibleByThree = (object3) => {
//     return `${object3.number} is not divisible by three`
// }
// console.log(divisibleByThree(object3))             // -7 is not divisible by three






// b) Create the function that makes the test pass.


// Pseudocode:
    // input: string 
    // output: array where every word of array is capitalized
    // create a function () => {} const
    // taking a parameter that represents a string
    // use .map on the parameter representing array
    // return an array provided by the .map that contains all the words in array

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// const capitalized = randomNouns1.map((noun) => { 
//     return noun[0].toUpperCase() + noun.slice(1)
// })
//  console.log(capitalized)       // [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]


// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// // b) Create the function that makes the test pass.

// const capitalized = randomNouns2.map((noun) => { 
//     return noun[0].toUpperCase() + noun.slice(1)
// })
//  console.log(capitalized)         // [ 'Temperature', 'Database', 'Chopsticks', 'Mango' ]

// Pseudocode:
    // input: string 
    // output: array where every word of array is capitalized
    // create a function () => {} const
    // taking a parameter that represents a string
    // use .map on the parameter representing array
    // return an array provided by the .map that contains all the words in array