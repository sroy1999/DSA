const LinearSearch = (arr, val) => {
    let n = arr.length;
    let flag = 0;
    for(let i=0; i<n; i++) {
        if(arr[i] === val) {
            return i;
            flag=1;
            break;
        }
    }
    if(flag === 0) {
        return "Not found";
    }
}

A = [10, 15, 1, 2, 9, 16, 11];
data = 20;
const search = LinearSearch(A, data);
console.log(search);


// It is also know as sequencial search
// Best case time complexity -> O(1)
// Worst case time complexity -> O(n)
// Average case time complexity -> O((n+!)/2)