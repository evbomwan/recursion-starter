function fibs(n) {
    let array = [0, 1];
    if (n === 0) return;
    if (n === 1) {
        console.log([0]);
        return;
    } 
    if (n === 2) {
         console.log([0,1]);
         return;
    }

    for (let i = 2; i < n; i++) {
    let next = array[i - 1] + array[i - 2];
    array.push(next);
    }
    console.log(array)
}
// fibs(0);

let array2 = [0, 1]
function fibsRec(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0,1];
    }
// recursion
let sequence =  fibsRec(n - 1);
let last = sequence[sequence.length - 1];
let secondLast = sequence[sequence.length - 2];
let nextNumber = last + secondLast;
sequence.push(nextNumber);
return sequence;
}
console.log(fibsRec(5));