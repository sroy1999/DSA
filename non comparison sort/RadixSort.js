const findLargest = (arr) => {
    let max = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const sorting = (arr, pos) => {
    let n = arr.length;
    let b = new Array(n);
    let count = new Array(10).fill(0);
    for(let i=0; i<n; i++) {
        count[Math.floor(arr[i]/pos) % 10]++;
    }
    for(let i=1; i<10; i++) {
        count[i] += count[i-1];
    }
    for(let i=n-1; i>=0; i--) {
        b[--count[Math.floor(arr[i]/pos) % 10]] = arr[i];
    }
    for(let i=0; i<n; i++) {
        arr[i] = b[i];
    }
    return arr;
}

const RadixSort = (arr) => {
    let largest = findLargest(arr);
    for(let position=1; Math.floor(largest/position) > 0; position*=10) {
        sorting(arr, position);
    }
    return arr;
}

A = [10, 15, 1, 2, 9, 16, 11];
const sortedArray = RadixSort(A);
console.log(sortedArray);


// It is also used to sort strings
// Time complexity -> O(n+k)
// Space complexity -> O(n+k)