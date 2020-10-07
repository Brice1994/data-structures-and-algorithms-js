function quickSort(arr, low = 0, high = arr.length - 1) {
    if(low < high) {
        let part = partition(arr, low, high);
        console.log(arr.join(" "));
        quickSort(arr, low, part - 1);
        quickSort(arr, part + 1, high);
    }
}

function partition(arr, low, high) {
    // choose last element in the array as a "pivot"
    let pivot = arr[high];
    let i = low;
    let j = low;
    for(; j < high + 1;){
        if(arr[j] < pivot){
            swap(arr, i, j);
            i++;
        }
        j++;
    }
    swap(arr, i, high);
    return i;
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [4,3,2,7,1,9,10];

quickSort(arr);
console.log(arr);