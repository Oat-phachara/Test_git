
// function remove(){
//     if
// }

// function remove(x) {
//     let length = x.length;
//     let stringindex = x[length - 1]
//     if (stringindex === "!") {
//         console.log(x.slice(0, x.length - 1))
//     } else {
//         console.log(x);
//     }
// }
// remove("hi")


// ดูเงินที่ลูกค้าจ่าย
// ดูจำนวนราคาสินค้า
//ลบราคากัน =เหลือยอดเท่าไหร่
//เอายอดนั้นมาคิดเงินทอน โดยมีประเภทเงินทอน หลายแบบ แต่ต้องจ่ายเป็นมูลค่าเงินทอนมากที่สุดเท่าที่จะทำได้ แล้วลดมูลค่าลงมาถ้ายังไม่เหลือ0จนเหลือ0

let product = 95151
let pay = 100000
let x = pay - product;

const thoun = 1000;
const fivehun = 500;
const onehun = 100;
const fif = 50;
const twenty = 20;
const ten = 10;
const five = 5;
const one = 1;
//ตัวเลข


let conti1 = x % thoun; //เศษที่เหลือจากการหารตัวตั้งx 1000 เก็บไว้ทำต่อ
let conti2 = conti1 % fivehun             // 500
let cnti_3 = conti2 % onehun;             // 100
let conti_4 = cnti_3 % fif;
let conti_5 = conti_4 % twenty;
let conti_6 = conti_5 % ten;
let conti_7 = conti_6 % five;
let conti_8 = conti_7 % one;



let set1 = x % fivehun
let set2 = set1 % onehun;
let set3 = set2 % fif;
let set4 = set3 % twenty;
let set5 = set4 % ten;
let set6 = set5 % five;
let set7 = set6 % one;



if ((x / thoun) >= 1) { //เมื่อตัวตั้งหาร 1000 มากกว่า1 จะทำดังนี้ (มีค่ามากกว่า=1000นั่นเอง)
    console.log("1000 :" + Math.floor((x / thoun)));  //แสดงผล1000 +จำนวนใบปัดทศนิยม
    if (conti1 >= 500) { //เงื่อนไขนี้จะอยู่ในเงื่อไขใหญ่คือ 1000 คือต้องเกิน1000ก่อน โดยเงื่อนไขนี้คือถ้าเศษจากการหารด้วย1000 เหลือ >=500
        console.log("500 :" + Math.floor((conti1 / fivehun))); //ให้log อันนี้ออกมา
    }
    if (conti2 >= 100) { //เงื่อนไขนี้คือถ้าเศษจากการหารตัวเมื่อกี้ เหลือ >= 100
        console.log("100 :" + Math.floor((conti2 / onehun)));
    }
    if (cnti_3 >= 50) { //เงื่อนไขนี้คือถ้าเศษจากการหารตัวเมื่อกี้ เหลือ >= 50
        console.log("50 :" + Math.floor((cnti_3 / fif)));
    }
    if (conti_4 >= 20) {
        console.log("20 :" + Math.floor((conti_4 / twenty)));
    }
    if (conti_5 >= 10) {
        console.log("10 :" + Math.floor((conti_5 / ten)));
    }
    if (conti_6 >= 5) {
        console.log("5 :" + Math.floor((conti_6 / five)));
    }

} else if (x / fivehun >= 1) {
    console.log("500 :" + Math.floor((x / fivehun)));
    if (set1 >= 100) {
        console.log("100 :" + Math.floor((set1 / onehun)));
    }
    if (set2 >= 50) {
        console.log("50 :" + Math.floor((set2 / fif)));
    }
    if (set3 >= 20) {
        console.log("20 :" + Math.floor((set3 / twenty)));
    }
    if (set4 >= 10) {
        console.log("10 :" + Math.floor((set4 / ten)));
    }
    if (set5 >= 5) {
        console.log("10 :" + Math.floor((set5 / five)));
    }


} else if (x / onehun >= 1) {
    console.log("100 :" + Math.floor((set1 / onehun)));
    if (set2 >= 50) {
        console.log("50 :" + Math.floor((set2 / fif)));
    }
    if (set3 >= 20) {
        console.log("20 :" + Math.floor((set3 / twenty)));
    }
    if (set4 >= 10) {
        console.log("10 :" + Math.floor((set4 / ten)));
    }
    if (set5 >= 5) {
        console.log("5 :" + Math.floor((set5 / five)));
    }

} else if (x / fif >= 1) {
    console.log("50 :" + Math.floor((set2 / fif)));
    if (set3 >= 20) {
        console.log("20 :" + Math.floor((set3 / twenty)));
    }
    if (set4 >= 10) {
        console.log("10 :" + Math.floor((set4 / ten)));
    }
    if (set5 >= 5) {
        console.log("5 :" + Math.floor((set5 / five)));
    }

} else if (x / twenty >= 1) {
    console.log("20 :" + Math.floor((set3 / twenty)));
    if (set4 >= 10) {
        console.log("10 :" + Math.floor((set4 / ten)));
    }
    if (set5 >= 5) {
        console.log("5 :" + Math.floor((set5 / five)));
    }
}

else if (x / ten >= 1) {
    console.log("10 :" + Math.floor((set4 / ten)));
    if (set5 >= 5) {
        console.log("5 : " + Math.floor((set5 / five)));
    }
}

else if (x / five >= 1) {
    console.log("5 : " + Math.floor((set5 / five)));
} if (set6 >= 1) {
    console.log("1 : " + Math.floor((set6 / one)));
}

else if (Math.floor((set6 / one)) != 0) {
    console.log("1 : " + Math.floor((set6 / one)));
}




// let string = "!hello!!!!! hello!!!"
// let index = string.length
// let lastout = index - 1
// let show = string[index - 1]
// let slice = string.slice(0, lastout)

// console.log(show);
// if (show == "!") {
//     console.log(slice);
// } else {
//     console.log(string);
// }