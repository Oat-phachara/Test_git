

function number(num) {
    let counter = 0;
    for (let digit = num; digit >= 1; digit--) {
        if (num % digit == 0) {
            counter++
        }
    }
    if (counter == 2) {
        return true;
    } else {
        return false;
    }
}

// for (num = 1; num <= 1000; num++) {
//     let test = number(num)
//     if (test === false) {
//         continue;
//     }
//     console.log(`${num} is prime number`);
// }

let num = 15
let test = number(num)
if (test === true) {
    console.log(num + " : is a prime number");
} else console.log(num + " : is not a prime number");



