// const fun = async() => {
//     setTimeout(()=>{
//         console.log('hello world');
//     },2000)

//     let res = await resultfun();

// }

// const resultfun = async() => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('running result fun');
//         },2000)
//         resolve();
//     })
// }

// fun(); 


// const p = () => {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('response arrived');
//         },5000);
//     })
// }

// const nj = async() => {
//     const calling = await p();
//     console.log(calling);
// }
// nj();


// const p1 = () => {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('p1 callinggg')
//         },10000) 
//     })
// }


// const p2 = () => {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('p2 callinggg')
//         },5000) 
//     })
// }

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p1 callinggg')
//     }, 10000)
// });
// b 

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p2 callinggg')
//     }, 5000)
// });


// const checking = async () => {
//     console.log('checking got called');
//     const a = await p1;
//     console.log(a);
//     const b = await p2;
//     console.log(b);
// }

// checking();

