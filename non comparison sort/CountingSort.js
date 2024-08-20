const CountingSort = (arr) => {
    let n = arr.length;
    if(n < 2) {
        return arr;
    }
    let k = Math.max(...arr);
    let count = new Array(k+1).fill(0);
    let b = new Array(n);
    for(let i=0; i<n; i++) {
        count[arr[i]]++;
    }
    for(let i=1;i<=k; i++) {
        count[i] = count[i] + count[i-1];
    }
    for(let i=n-1; i>=0; i--) {
        b[--count[arr[i]]] = arr[i];
    }
    for(let i=0; i<n; i++) {
        arr[i] = b[i];
    }
    return arr;
}

A = [1, 0, 2, 1, 0, 1, 1, 5, 6, 7, 5, 4, 2, 2, 0, 0, 1];
const sortedArray = CountingSort(A);
console.log(sortedArray);

// It is a non comparison sort
// It does not work on negative values