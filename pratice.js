// ---------------------------------Q1---------------------------------------



function logestWord(x) {
    let test = 0;
    let num = 1
    let string = ""
    let result;
    let arr = x.split(" ")
    let index = arr.length
    for (let i = 0; i < index; i++) {

        let check = arr[i];
        let val = check.length;
        if (test < val) {
            test = val;
            result = check;
        }
    } console.log(result);
}

logestWord("I think about you all the time");
logestWord("I'll stand by you no matter what");
logestWord("I was made for lovings you.");



// -----------------------test .find() --------------------------------

// let num = 0

// function logestWord(string) {
//     let arr = string.split(" ")
//     for (let i = 0; i < arr.length; i++) {
//         let list = arr[i]
//         let long = list.length
//         if (num < long) {
//             num = long
//         }
//     };
//     let findfailed = arr.find((score) => {
//         return score.length == num
//     });
//     console.log(findfailed);
// }
// logestWord("I think about you all the time");
// logestWord("I'll stand by you no matter what");
// logestWord("I was made for loving you.");

// finish

// ---------------------------------Q2---------------------------------------


// let test = "1"
// let num = 1;
// function factorial(x) {
//     for (let i = 1; i <= x; i++) {
//         num = num * i;

//         if (i !== 1) {
//             test = test + "*" + i
//         }

//     } console.log(test + " = " + num);
// }
// factorial(3);
// factorial(4);
// factorial(5);

// finish

// ---------------------------------Q3---------------------------------------


// function rotateArry(x, y) {
//     for (let i = 0; i < y; i++) {
//         let pop = x.pop()
//         let unshift = x.unshift(pop)
//     } console.log(x);
// }
// rotateArry([3, 2, 1], 2);
// rotateArry([1, 2, 3, 4, 5], 1);
// rotateArry([4, 5, 6, 7], 3);


// finish

// ---------------------------------Q4---------------------------------------


function missingNumber(x) {
    let sort = x.sort()
    let arr = []
    let pop = sort.pop()

    for (let i = 0; i < pop; i++) {

        sort.push(i + 1,)

    }
    sort.push(pop)
    console.log(sort);
    const uniqueSet = new Set(sort);
    console.log(uniqueSet);
    const backToArray = [...uniqueSet];
    console.log(backToArray);

}
missingNumber([3, 1, 5])


function missingNumber(x) {
    let sort = x.sort() //เรียงน้อยไปมาก
    let index = sort[sort.length - 1] //ตัวสุดท้ายได้มากสุด
    let arr = []
    let arr2 = []
    let result;
    let test

    let num;
    for (let i = 1; i <= index; i++) { //lopp 1-ตัวที่มากสุด
        // arr.push(i)
        num = i
            ;//เอาเลขloopใส่ไปใน arrayเช่น [1,2,3,4,5,6,7,8]
        console.log(num);
        //ตัดตัวท้าย เช่น [1,2,4,5]
    }
    for (let items of sort) {
        //เอาตัวเลขออกมาแสดงเป็น loop จะได้เป็น
        //1
        //2
        //4
        //5
        test = items
        console.log(test);
    }
}
missingNumber([1, 2, 4, 5, 8])

//include
// notyet

// ---------------------------------Q5---------------------------------------

function removeDuplicate(x) {
    const uni = new Set(x)
    const toarray = [...uni];
    console.log(toarray);
}
removeDuplicate([1, 2, 2, 3, 4, 5, 5, 5])
removeDuplicate([2, 2, 1, 2, 2, 4, 4])
removeDuplicate([9, 9, 1, 1, 2, 3, 4])
// loop2ชั้น
// finish

// ---------------------------------Q6---------------------------------------
let b = [];
let c = []
function maxCharacters(x) {
    let arr = x.split("");
    const uni = new Set(arr)


    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        while (c == 0) {
            if (b.indexOf(arr[i]) < 0) {
                b.push(arr[i]);

            } else {
                c.push(arr[i]);

            }
        }
    }
    console.log('{name: ' + '"' + c + '"' + "," + ' currentMax: ' + 4 + " }");

}


// maxCharacters("abbbccaa")

// notyet

// ---------------------------------Q Test ---------------------------------------

// let product = 5100
// let pay = 6000;
// let change = pay - product
// let result = "";
// console.log("เงินที่ต้องทอนคือ : " + change);
// TangThon(change)
// function TangThon(change) {
//     while (change > 0) {
//         if (change >= 1000) {
//             result += (" ใช้แบ้งค์ " + 1000 + " บาท " + Math.floor(change / 1000) + " ใบ ,");
//             change = change - (1000 * Math.floor(change / 1000))
//         }
//         else if (change >= 500) {
//             result += (" ใช้แบ้งค์ " + 500 + " บาท " + Math.floor(change / 500) + " ใบ ,");
//             change = change - 500 * Math.floor(change / 500)
//         }
//         else if (change >= 100) {
//             result += (" ใช้แบ้งค์ " + 100 + " บาท " + Math.floor(change / 100) + " ใบ ,");
//             change = change - 100 * Math.floor(change / 100)
//         }
//         else if (change >= 50) {
//             result += (" ใช้แบ้งค์ " + 50 + " บาท " + Math.floor(change / 50) + " ใบ ,");
//             change = change - 50 * Math.floor(change / 50)
//         }
//         else if (change >= 20) {
//             result += (" ใช้แบ้งค์ " + 20 + " บาท " + Math.floor(change / 20) + " ใบ ,");
//             change = change - 20 * Math.floor(change / 20)
//         }
//         else if (change >= 10) {
//             result += (" ใช้เหรียญ" + 10 + " บาท " + Math.floor(change / 10) + " เหรียญ ,");
//             change = change - 10 * Math.floor(change / 10)
//         }
//         else if (change >= 5) {
//             result += (" ใช้เหรียญ " + 5 + " บาท " + Math.floor(change / 5) + " เหรียญ ,");
//             change = change - 5 * Math.floor(change / 5)
//         }
//         else if (change >= 2) {
//             result += (" ใช้เหรียญ " + 2 + " บาท " + Math.floor(change / 2) + " เหรียญ ,");
//             change = change - 2 * Math.floor(change / 2)
//         }
//         else if (change >= 1) {
//             result += (" ใช้เหรียญ " + 1 + " บาท " + Math.floor(change / 1) + " เหรียญ ,");
//             change = change - 1 * Math.floor(change / 1)
//         }
//     } console.log(result);
// }

// ---------------------------------Q Test ---------------------------------------
