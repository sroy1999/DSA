const maxHeapify = (arr, n, i) => {
    let largest = i;
    let left = (2*i)+1;
    let right = (2*i)+2;
    while(left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    while(right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if(largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, n, largest);
    }
}

const HeapSort = (arr) => {
    let n = arr.length;
    for(let i=Math.floor(n/2)-1; i>=0; i--) {
        maxHeapify(arr, n, i);
    }
    for(let i=n-1; i>0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, i, 0);
    }
    return arr;
}

A = [10, 15, 1, 2, 9, 16, 11];
const sortedArray = HeapSort(A);
console.log(sortedArray);

//Time complexity -> O(nlogn) Best case, average case and worst case
// Using heapify we can attain the best case time complexity of O(n)