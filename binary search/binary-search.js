// //Write a function that performs a binary search on a sorted array.
// // count used identify how many search apply no value


const binary = (arr, search) => {
    let start = 0;
    let end = arr.length - 1;
    let count = 0
    while (start <= end) {
        count++;
        let midvalue = Math.floor((start + end) / 2);
    if (arr[midvalue] === searchValue) {
      return midvalue;
    } else if (arr[midvalue] > searchValue) {
      end = midvalue - 1;
    } else if (arr[midvalue] < searchValue) {
      start = midvalue + 1;
    }
    }
    console.log(count)
    return -1;
}


const array=[1,5,8,7,41,2,85,587,14,865,1147,22,4588,114,55,44,877,22,33,474,85];
const searchValue = 85;
array.sort((a, b) => a - b);
console.log(binary(array, searchValue))

