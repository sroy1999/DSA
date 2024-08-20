const QuickSort = (arr) => {
    let n = arr.length;
    if(n <= 1) {
        return arr;
    }
    let pivot = arr[n - 1];
    let left = [], right = [];
    for(let i=0; i<n-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}

A = [10, 15, 1, 2, 9, 16, 11];
const sortedArray = QuickSort(A);
console.log(sortedArray);

// Time complexity
// Worst case = O(n^2)
// Best and average case = O(nlogn)