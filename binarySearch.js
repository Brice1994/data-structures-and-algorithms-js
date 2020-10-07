function binarySearch(arr, val, start = 0, end = arr.length - 1){
    if(start > end){
        return -1;
    }
    let mid = Math.floor((start + end)/2);

    if(arr[mid] === val){
        return mid;
    }
    if(arr[mid] > val){
        return binarySearch(arr, val, start, mid-1);
    }
    return binarySearch(arr, val, mid + 1, end);
}
function iterativeBinarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] === val){
            return mid;
        }
        else if(arr[mid] < val) {
            start = mid + 1;
        }else {
            end = mid - 1;
        }
    }
    return -1;
}
let arrr = [1,2,3,4,5,6,7,8,9,10];

console.log(binarySearch(arrr, 3));
console.log(iterativeBinarySearch(arrr, 3));