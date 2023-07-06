// function remove(x) {
//     let stringindex = x[x.length - 1]
//     if (stringindex === "!") {
//         console.log(x.slice(0, x.length - 1))
//     } else {
//         console.log(x);
//     }
// }
// remove("!hi!!!gdfg!")

//-----------------------------------------------------------------

// let number = 600542
// let save = 0;
// while (number > 0) {

//     if (number >= 1000) {
//         console.log("1000 เป็นจำนวน" + Math.floor(number / 1000));
//         number = number - 1000 * Math.floor(number / 1000);
//     }
//     else if (number >= 500) {
//         console.log("500 เป็นจำนวน" + Math.floor(number / 500));
//         number = number - 500 * Math.floor(number / 500);
//     }
//     else if (number >= 100) {
//         console.log("100 เป็นจำนวน" + Math.floor(number / 100));
//         number = number - 100 * Math.floor(number / 100);
//     }
//     else if (number >= 50) {
//         console.log("50 เป็นจำนวน" + Math.floor(number / 50));
//         number = number - 50 * Math.floor(number / 50);
//     }
//     else if (number >= 20) {
//         console.log("20 เป็นจำนวน" + Math.floor(number / 20));
//         number = number - 20 * Math.floor(number / 20);
//     }
//     else if (number >= 10) {
//         console.log("10 เป็นจำนวน" + Math.floor(number / 10));
//         number = number - 10 * Math.floor(number / 10);
//     }
//     else if (number >= 5) {
//         console.log("5 เป็นจำนวน" + Math.floor(number / 5));
//         number = number - 5 * Math.floor(number / 5);
//     }
//     else if (number >= 2) {
//         console.log("2 เป็นจำนวน" + Math.floor(number / 2));
//         number = number - 2 * Math.floor(number / 2);
//     }
//     else if (number >= 1) {
//         console.log("1 เป็นจำนวน" + Math.floor(number / 1));
//         number = number - 1 * Math.floor(number / 1);
//     }
//     console.log(number);
// }

//-----------------------------------------------------------------


// function everage(x) {
//     let checklength = x.length
//     let center = checklength / 2

//     if (checklength % 2 == 0) {
//         console.log(x[center - 1] + x[center]);
//     } else {
//         console.log(x[Math.floor(center)]);
//     }
// }


// everage("test")
// everage("testing")
// everage("middle")


//-----------------------------------------------------------------

// function solong(x) {
//     let string = "";
//     for (let i = 0; i < x.length; i++) {
//         string += (x[i].repeat(i + 1))
//         if (i < x.length - 1) {
//             string += "-"
//         }

//     } console.log(string)
// }
// solong("abcd")
// solong("big")
// solong("test")


//---------------------------------------------------------------------
console.log(`สวัส
ดu
กฟ`);