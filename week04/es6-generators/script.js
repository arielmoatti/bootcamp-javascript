//generators exercises

//1. exercise

function* fizzBuzz() {
    let num = 1;
    while (num < 101) {
        if (num % 3 === 0 && num % 5 === 0) {
            yield "fizzbuzz";
        } else if (num % 5 === 0) {
            yield "buzz";
        } else if (num % 3 === 0) {
            yield "fizz";
        } else {
            yield num;
        }
        num++;
    }
}

for (let numbers of fizzBuzz()) {
    console.log(numbers);
}

//2. exercise

function* revArr(arr) {
    yield [...arr].reverse();
}

const it = revArr([1, 2, 3]);
const val = it.next().value;
// console.log(val);
