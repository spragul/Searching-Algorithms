/*
Write a function that performs a linear search on an array.
 Write a function that performs a binary search on a sorted array.
 Explain the concept of Big O notation and analyze the time complexity of the linear and binary search algorithms.
 */

 // Write a function that performs a linear search on an array.

 function linear(arr,searchValue){
   for(let i=0;i<arr.length;i++){
    if(arr[i]===searchValue){
        return i
    }
   }
 }
 console.log(linear([2,4,6,8,10,12,14,5,16,18,15,12,4,3,2],15))