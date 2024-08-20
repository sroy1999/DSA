const SelectionSort = (arr) => {
    let n = arr.length;
    let min;
    for(let i=0; i<n-1; i++) {
        min = i;
        for(let j=i+1; j<n; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

A = [7, 4, 10, 8, 3, 1];
const sortedArray = SelectionSort(A);
console.log(sortedArray);

// Time complexity = O(n^2) -> Best case and Worst 
// It is a comparison sort