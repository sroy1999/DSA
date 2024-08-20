const OptimizedBubbleSort = (arr) => {
    let n = arr.length;
    let flag;
    for(let i=0; i<n; i++) {
        flag = 0;
        for(let j=0; j<n-1-i; j++){
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                flag = 1;
            }
        }
        if(flag === 0) {
            break;
        }
    }
    return arr;
}

A = [2, 3, 4, 6, 10, 11, 15, 18]
const sortedArray = OptimizedBubbleSort(A);
console.log(sortedArray);

// Time complexity = O(n)
// It is a comparison sort