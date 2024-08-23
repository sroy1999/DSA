const findLargest = (arr) => {
    let max = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const sorting = (arr, base) => {
    let n = arr.length;
    let b = new Array(n);
    let count = new Array(10).fill(0);
    for(let i=0; i<n; i++) {
        let index = Math.floor(arr[i]/base) % 10;
        count[index]++;
    }
    for(let i=1; i<10; i++) {
        count[i] += count[i-1];
    }
    for(let i=n-1; i>=0; i--) {
        let index = Math.floor(arr[i]/base) % 10;
        b[count[index] - 1] = arr[i];
        count[index]--;
    }
    for(let i=0; i<n; i++) {
        arr[i] = b[i];
    }
    return arr;
}

const RadixSort = (arr) => {
    let largest = findLargest(arr);
    for(let base=1; Math.floor(largest/base) > 0; base*=10) {
        sorting(arr, base);
    }
    return arr;
}

A = [10, 15, 1, 2, 9, 16, 11];
const sortedArray = RadixSort(A);
console.log(sortedArray);


// It is also used to sort strings