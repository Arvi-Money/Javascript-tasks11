// // // Task - 1
// const numbers = [7, 5, "mom", false, "baby"];

// function sumNumbers(arr) {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === "number") {
//         sum += arr[i];
//       }
//     }
    
//     return sum;
//   }

//   console.log(sumNumbers(numbers)); 
  



// // Task - 2
// let sentence = "the moon";

// function capitalizeWords(arg) {
//     let letters = sentence.split(" "); 
//         for (let i = 0; i < letters.length; i++) {
//             letters[i] = letters[i][0].toUpperCase() + letters[i].substring(1);
//     }
    
//     let capitalizedSentence = letters.join(" ");
//     return capitalizedSentence;
//   }
//   console.log(capitalizeWords(sentence)); 



// // Task - 3
// let words = prompt("Enter word");

// function palindromFunction(arg) {
//     let reverseWord = Array.from(words).reverse().join("");    
//     if (words == reverseWord) {
//         return "Palindrom so'z"
//     }else{
//         return "Palindrom so'z emas"
//     }
// }

// console.log(palindromFunction(words));



// Task - 4
const users = [
    {
        id: 1,
        name: "John",
        age: 40
    },
    {
        id: 2,
        name: "Bill",
        age: 45
    },
    {
        id: 3,
        name: "Adam",
        age: 30
    },
];

function findBiggestAge(arr, key, value) {
    if(Math.max(40, 45, 30)){
        return users.name
    }
}

console.log(findBiggestAge(users));