const SelectionSort = (arr) => {
    let n = arr.length;
    let swaps = 0;
    let arr1 = []
    for(let i=0; i<n-1; i++) {
        let min = i;
        for(let j=i+1; j<n; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
            arr1.push(Math.abs(arr[i] - arr[min]));
        }
    }
    return [...new Set(arr1)].length;
}

//A = [7, 4, 10, 8, 3, 1];
A = [2, 5, 3, 1];
//A = [3, 4, 2, 5, 1];
const sortedArray = SelectionSort(A);
console.log(sortedArray);

// Time complexity = O(n^2) -> Best case and Worst 
// It is a comparison sort