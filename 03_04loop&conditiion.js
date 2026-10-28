
// //conditional statements
// const score = 50;
// if (score >= 60)
//     console.log("You passed the exam!");
// else
//     console.log("You failed the exam!");


// const temperature = 30;// "else if" statement run order from top to bottom, so the first condition that is true will be executed.
// if (temperature === 30) {
//     console.log("It's hot outside!");
// } else if (temperature < 10) {
//     console.log("It's cold outside!");
// } else if (temperature >= 10 && temperature <= 30) {
//     console.log("The weather is moderate.");
// }
// else {
//     console.log("The weather is moderate.");
// }


// const hasticket = true;
// const hasid = true;
// const age = 18;

// if (hasticket && hasid && age >= 18) {
//     console.log("You can enter the concert!");
// } else {
//     console.log("You cannot enter the concert!");
// }

// if (hasticket || hasid && age >= 30) {
//     console.log("You can enter the concert!");

// } else {
//     console.log("you cannot enter the concert")
// }
// if (hasticket) {
//     if (hasid) {
//         if (age >= 18) { console.log("You can enter the concert!"); }
//         else { console.log("You cannot enter the concert!"); }
//     } else {
//         console.log("You cannot enter the concert!");
//     }
// } else {
//     console.log("You cannot enter the concert!");
// }

// const isloggedin = true;
// const isadmin = true;

// if (isloggedin) {
//     if (isadmin) {
//         console.log("Welcome, admin!");
//     } else {
//         console.log("Welcome, user!");
//     }
// } else {
//     console.log("Please log in.");
// }

// const number_sign = "+";
// switch (number_sign) {
//     case "+":
//         console.log("The result is positive.");
//         break;
//     case "-":
//         console.log("The result is negative.");
//         break;
//     default:
//         console.log("Invalid sign.");
// }
// user name grreeting message
// const username = "John";
// if (username) {
//     console.log("Hello, " + username);
// } else {

//     console.log("No username provided.!")
// }

// for (let count = 1; count <= 5; count++) {
//     console.log(count);
// }
// while & do while loop
// let countdown = 30;
// while (countdown > 0) {
//     console.log(countdown);
//     countdown--;
// }
// let countdown = 0;;
// do {
//     console.log(countdown);
//     countdown++;
// }
// while (countdown <= 100);


//for of loop
// const colors = ["red", "green", "blue"];

// for (const color of colors) {
//     console.log(color);
// }

// const names = ["Mg Mg", "Aung Aung", "Hla Hla"];
// for (const n of names) {
//     console.log(n);
// }

//for in loop in object
// const student = {
//     stu1: { name: "Mg Mg", age: 30, grade: "A" },
//     stu2: { name: "Aung Aung", age: 25, grade: "B" },
//     stu3: { name: "Moe Hein || Sein Htun", age: 28, grade: "C" }
// };
// for (const key in student) {
//     if (student[key].name === "Mg Mg") {
//         console.log(key, student[key]);
//         break;

//     }
// }

//for in loop in array
// const student = [
//     { name: "Mg Mg", age: 30, grade: "A" },
//     { name: "Aung Aung", age: 25, grade: "B" },
//     { name: "Moe Hein || Sein Htun", age: 28, grade: "C" }
// ];
// for (const key in student) {
//     if (student[key].name === "Mg Mg") {
//         console.log(key, student[key]);
//         break;

//     }
// }

//for loop with break and continue
// for (let number = 1; number <= 10; number++) {
//     if (number === 3) {
//         continue; // Skip the rest of the loop body for this iteration
//     }
//     if (number === 5) {
//         break; // Exit the loop
//     }
//     console.log(number);
// }