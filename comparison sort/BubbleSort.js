const bubbleSort = (arr) => {
    n = arr.length;
    for(let i=0; i<n-1; i++) {
        for(let j=0; j<n-1-i; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

A = [15, 16, 6, 8, 5]
const sortedArray = bubbleSort(A);
console.log(sortedArray);

// Time complexity = O(n^2)
// It is a comparison sort