// function isBoiling(x) {

//     let char = x.charAt(x.length - 1)
//     let num = parseInt(x)
//     if (num === 212 && char === "F") {
//         console.log(true);
//     } else if (num === 100 && char === "C") {
//         console.log(true);
//     } else {
//         console.log(false);

//     }
// }
// isBoiling("212C")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkword(x) {
//     let look1 = x.includes("meme")
//     let look2 = x.includes("tiktok")
//     let look3 = x.includes("anime")
//     let look4 = x.includes("football")
//     if (look1 === true || look2 === true || look3 === true || look4 === true) {
//         console.log("NO!");
//     } else {
//         console.log("Safe watching!");
//     }
// }
// checkword("The most popular viral tiktok videos")
// checkword("Top 10 football players of all time")
// checkword("How to ace BC Calculus in 5 Easy Steps")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function keybroad(x) {
//     let result;
//     let look1 = x.includes("4")
//     let look2 = x.includes("5")
//     let look3 = x.includes("1")
//     let look4 = x.includes("0")

//     if (look1 === true) {
//         x = x.replace("4", "A")

//     }
//     if (look2 === true) {
//         x = x.replace("5", "S")

//     }
//     if (look3 === true) {
//         x = x.replace("1", "I")

//     }
//     if (look4 === true) {
//         x = x.replace("0", "O")


//     } console.log(x);


// } keybroad("MUB45HIR")
// keybroad("DUBLIN")
// keybroad("5ING4P0RE")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function bread(x, y) {
//     if (x[0] == y[0] && x[x.length - 1] === y[y.length - 1]) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// bread(["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]);
// bread(["brown bread", "chicken", "white bread"], ["white bread", "chicken", "white bread"]);
// bread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]);
// bread(["toast", "cheese", "toast"], ["toast", "cheese", "toast"]);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getFile(x) {
//     let split = x.split("/")
//     let pop = split.pop()
//     console.log(pop);
// }
// getFile("C:/Projects/pill+tests/ascii/edabit.txt")
// getFile("C:/Users/johnsmith/Music/Beethoven_5.mp3")
// getFile("ffprobe.exe")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let x = ["fanta", "cola", "water"]
// let result = x.filter((Good) => {
//     return Good !== "cola" && "Fanta"

// })

// console.log(result);
// // check(["fanta", "cola", "water"])
// // check(["fanta", "cola"])
// // check(["lemonade", "beer", "water"])