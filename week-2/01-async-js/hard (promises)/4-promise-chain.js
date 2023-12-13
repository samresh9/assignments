/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
let p1= new Promise((resolve)=>{
    setTimeout(()=>{

        resolve("t1")
    }, t * 1000)
}
)
return p1;
}

function wait2(t) {
let p2= new Promise((resolve)=>{
    setTimeout(()=>{

        resolve("t1")
    }, t * 1000)
}
)
return p2;
}

function wait3(t) {
let p3= new Promise((resolve)=>{
    setTimeout(()=>{

        resolve("t1")
    }, t * 1000)
}
)
return p3;
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
 return wait1(t1).then((res)=>{return wait2(t2)}).then((res)=>{return wait3(t3)}).then((res)=>{const end = Date.now();
   // console.log(end-start)
return end-start})
}
calculateTime(1,2,3)
module.exports = calculateTime;
