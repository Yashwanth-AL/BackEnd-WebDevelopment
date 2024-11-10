import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

var doubled = numbers.map((num) => {
    return num * 2;
})
console.log(doubled);


var alteredEmojis = emojipedia.map((emoji) => {
    return emoji.meaning.substring(0, 100);
})
console.log(alteredEmojis);

//Filter - Create a new array by keeping the items that return true.

var evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
})
console.log(evenNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

var sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum);

//Find - find the first item that matches from an array.

var firstEvenNumber = numbers.find((num) => {
    return num % 2 === 0;
});
console.log(firstEvenNumber);

//FindIndex - find the index of the first item that matches.

var firstEvenNumberIndex = numbers.findIndex((num) => {
    return num % 2 === 0;
});
console.log(firstEvenNumberIndex);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
