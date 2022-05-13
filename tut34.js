// console.log("this code by code with harry");

// This is Synchronsh code = which code executed by 1 by 1 called synchronise code...
// for (let index = 0; index < 4045; index++) {
//   const element = index;
//   console.log("This is index number" + index);
// }
// console.log("done printing");

setTimeout(() => {
  for (let index = 0; index < 4045; index++) {
    const element = index;
    console.log("This is index number" + index);
  }
},100);
console.log("done printing");
