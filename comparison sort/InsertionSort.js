const InsertionSort = (arr) => {
    let n = arr.length;
    let temp, j;
    for(let i=1; i<n; i++) {
        temp = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

A = [5, 4, 10, 1, 6, 2]
const sortedArray = InsertionSort(A);
console.log(sortedArray);

// Time complexity
// Best case = O(n)   => when array is sorted
// Worst case = O(n^2)
// It is a comparison sort