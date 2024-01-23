// const a = [0, 1, 0, 2, 3, 0, 0]
// let newa = []
// for (let i = 0; i < a.length; i++) {
//     newa.push(a[i] == 0 ? 0 : a[i])
// }
// console.log(newa)
let array = [12, 34, 56, 76, 97, 5]
// find max element in an array without max method

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
// console.log(array[array.length-1]);

function maxValue(array) {
    if (array.length == 0) {
        return undefined
    }
    console.log('.js');
    let maxVALUE = array[0]
    // let array = [12, 34, 56, 76, 97, 5]
    for (let index = 0; index < array.length; index++) {
        // const element = array[index];
        if (array[index] > maxVALUE) {
            maxVALUE = array[index]
            // console.log(maxVALUE);
        }
    }
    return maxVALUE
}
const maxVal = maxValue(array)
console.log(maxVal);
console.log(12>34);

// const a = [0, 1, 0, 2, 3, 0, 0];

// function moveZerosToRight(arr) {
//     let nonZeroIndex = 0;

//     // Iterate through the array
//     for (let i = 0; i < arr.length; i++) {
//         // If the current element is not 0, move it to the leftmost non-zero position
//         if (arr[i] !== 0) {
//             arr[nonZeroIndex] = arr[i];
//             nonZeroIndex++;
//         }
//     }

//     // Fill the remaining positions with 0
//     for (let i = nonZeroIndex; i < arr.length; i++) {
//         arr[i] = 0;
//     }
// }

// moveZerosToRight(a);
// console.log(a);
// // let array = [12, 34, 56, 76, 97, 5];

// function findSecondMax(arr) {
//     let max = Number.NEGATIVE_INFINITY;
//     console.log(max);
//     let secondMax = Number.NEGATIVE_INFINITY;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             // Current element is greater than the current max
//             secondMax = max;
//             max = arr[i];
//         } else if (arr[i] > secondMax && arr[i] < max) {
//             // Current element is greater than the current secondMax but less than max
//             secondMax = arr[i];
//         }
//     }

//     return secondMax;
// }

// // let secondMax = findSecondMax(array);
// // console.log("Second Max Element:", Math.max(...array))>Math.max(...array);
// // let array = [12, 34, 56, 76, 97, 5];

// // Find the maximum element in the array
// let maxElement = Math.max(...array);

// // Remove the maximum element from the array
// let filteredArray = array.filter(element => element !== maxElement);

// // Find the second maximum element in the filtered array
// let secondMaxElement = Math.max(...filteredArray);

// console.log("Second Max Element:", secondMaxElement);
