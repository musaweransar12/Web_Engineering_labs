// Call back example

/*
function sum(a, b) {
  console.log("a + b = ", a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(3, 4, sum);
*/

// Callback hell

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log(dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3...");
//     getData(3, () => {});
//   });
// });

// Promises

let promis = new Promise((resolve, reject) => {
  console.log("I am promise");
  resolve("Fulfilled");
});
