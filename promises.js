//Exercise 1:
//Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or equal/greater than the value 10.

const testNum = (number) => {
    return new Promise((resolve, reject) => {
        if (number >= 10) {
            resolve('Yay, ' + number + ' is >= 10, success!');
        }
        reject('Yikes, ' + number + ' is less then 10... Error!');
    });
};

testNum(20)
    .then((r) => {console.log(r)})
    .catch((er) => {console.log(er)});

//Exercise 2:
//Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

const makeAllCaps = ((array) => {
    return new Promise((resolve, reject) => {
        resolve(array.map((word) => {
            if (typeof word !== 'string') {
                reject ('Error! One or more items of the passed array is not a string.');
            }
            return word.toUpperCase();
        }));
    });
});

const sortWords = ((array) => {
    return new Promise((resolve) => {
        resolve(array.sort());
    });
});

let array = ['jlkjlklk', 'wqeqweqwe', 'asdasdsa'];
let messedArray = ['asdasd', 6, 'kjlkjlkjlkj'];

makeAllCaps(array) // or messedArray
    .then(sortWords)
    .then((result) => {console.log(result)})
    .catch((err) => {console.log(err)});

// Exercise 3:
// Concatenate two arrays and assign the result to a variable (async/await)

const concatenateArrays = async(array1, array2) => {
    return new Promise((resolve, reject) => {
        if (Array.isArray(array1) || Array.isArray(array2)) {
            resolve(array1.concat(array2));
        }
        reject('Error! This is not an array.');
    });
};

let first = ['jlkjlklk', 'wqeqweqwe', 'asdasdsa'];
let second = ['2132312', '5345345', '09605906'];

let newArray = await concatenateArrays(first, second).then((result) => {return result});

// All together
makeAllCaps(first)
    .then(sortWords)
    .then(concatenateArrays.bind(null, second))
    .then((result) => {console.log(result)});