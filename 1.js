// const a = [0, 1, 0, 2, 3, 0, 0]

// const na = []
// for (let i = 0; i < a.length; i++) {
//     if (a[i] !== 0) {
//         na.push(a[i])
//     }
// }
// for (let i = 0; i < a.length; i++) {
//     if (a[i] == 0) {
//         na.push(a[i])
//     }
// }
// console.log(na);

const arr = [12, 122, 134, 11, 13, 132, 1, 4, 7, 2]

let maxValue1 = arr[0]
let secondMax = null
for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] > maxValue1) {
        maxValue1 = arr[i]
    }
    else if (arr[i] > secondMax && arr[i] < maxValue1) {
        //             // Current element is greater than the current secondMax but less than max
        secondMax = arr[i];
    }
}
console.log(secondMax);