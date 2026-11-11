function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
   const result = [];

   while (left.length && right.length) {
    if (left[0] < right[0]) {
        result.push(left.shift());
    } else {
        result.push(right.shift());
    }
   }
   return result.concat(left).concat(right);
}

console.log(mergeSort([4,5,67,1]));