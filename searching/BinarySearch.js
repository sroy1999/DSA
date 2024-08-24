const BinarySearch = (arr, val) => {
    let arr1 = [...arr].sort((a, b) => a - b);
    let n = arr1.length;
    let left = 0;
    let right = n-1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(val === arr1[mid]){
            return mid;
        }
        else if(val < arr1[mid]) {
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return -1;
}

A = [10, 15, 1, 2, 9, 16, 11];
data = 2;
const search = BinarySearch(A, data);
if(search !== -1) {
    console.log("Element found");
}else{
    console.log("Element not found");
}


// Array needs to be sorted in binary search
// Best case time complexity -> O(1)
// Worst case time complexity -> O(logn)
// Average case time complexity -> O((n+!)/2)