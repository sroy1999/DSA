const BigSort = (arr) => {
    arr.sort((a, b) => {
        if(a.length !== b.length) {
            return a.length - b.length;
        }
        for(let i=0; i<a.length; i++) {
            if(a[i] !== b[i]) {
                if(a[i] < b[i]) {
                    return -1;
                }else {
                    return 1;
                }
            }
        }
        return 0;
    })
    return arr;
}

A = ["15", "16", "6", "8", "5"];
const sortedArray = BigSort(A);
console.log(sortedArray);