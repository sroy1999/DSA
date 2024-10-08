const ShellSort = (arr) => {
    let n = arr.length;
    let count = 0;
    for(let gap=Math.floor(n/2); gap>=1; gap=Math.floor(gap/2)) {
        for(let j=gap; j<n; j++){
            for(let i=j-gap; i>=0; i=i-gap) {
                if(arr[i+gap] > arr[i]) {
                    break;
                }else{
                    [arr[i+gap], arr[i]] = [arr[i], arr[i+gap]];
                    count++;
                }
            }
        }
    }
    return count;
}

//A = [7, 4, 10, 8, 3, 1];
A = [3, 4, 2, 5, 1];
const sortedArray = ShellSort(A);
console.log(sortedArray);