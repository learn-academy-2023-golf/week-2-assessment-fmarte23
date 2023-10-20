// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "Golf 2023"
// console.log(cohort.split(" "))

// a) Your answer: [ "Golf", "2023"]
// b) Verify and explain: [ 'Golf', '2023' ]--- takes the parameter that represents the string "Golf 2023"

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: undefined -- LEARN Student is not yet defined

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: undefined
// b) Verify and explain: undefined. Must have a return for new array from .filter and must take in parameter to represent an array

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: undefined
// b) Verify and explain: undefined. myCodingSkills.languages is not a function

// --------------------5) What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Golf"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: { student: 'George', cohort: 'Golf', year: 2023 }
// b) Verify and explain: { student: 'George', cohort: 'Golf', year: 2023 }
