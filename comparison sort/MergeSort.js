const merge = (right, left) => {
    let result = [];
    let left_index = 0, right_index = 0;
    while (left_index < left.length && right_index < right.length) {
        if(left[left_index] < right[right_index]) {
            result.push(left[left_index]);
            left_index++;
        }else {
            result.push(right[right_index]);
            right_index++;
        }
    }
    while (left_index < left.length) {
        result.push(left[left_index]);
        left_index++;
    }
    while(right_index < right.length) {
        result.push(right[right_index]);
        right_index++;
    }
    return result;
}

const MergeSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    let mid = arr.length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(MergeSort(left), MergeSort(right));
}

A = [15, 5, 24, 8, 1, 3, 16, 10, 20];
const sortedArray = MergeSort(A);
console.log(sortedArray);

// It is a comparison sort