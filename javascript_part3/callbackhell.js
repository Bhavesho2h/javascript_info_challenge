// // console.log('start');

// // setTimeout(() => {
// //     console.log("this is the first setTimeOut");

// //     setTimeout(() => {
// //         console.log('this is the secondTImeout');

// //         setTimeout(() => {
// //             console.log('this  is the third Timeout');
// //         }, 1000)

// //     }, 1000)


// // }, 1000)

// // console.log('end');


// // function firstFunction(callback) {
// //     setTimeout(() => {
// //         console.log('this is the first function');
// //         callback();
// //     }, 2000)
// // }
// // function secondFunction(callback) {
// //     setTimeout(() => {
// //         console.log('this is the second function');
// //         callback();
// //     }, 2000)

// // }
// // function thirdFunction(callback) {
// //     setTimeout(() => {
// //         console.log('this is the third');
// //         callback();
// //     }, 2000)
// // }
// // function fourthFunction() {
// //     setTimeout(()=>{
// //         console.log('fourth function');
        
// //     },2000)
// // }

// // firstFunction(function () {
// //     secondFunction(function() {
// //         thirdFunction(function(){
// //             fourthFunction();
// //         });
    
// //     });
    
// // });


// //how promise will solve this



// function firstFunction() {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log('this is the first function');
            
//             res();
//         }, 2000)
//     })
    
// }
// function secondFunction() {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log('this is the second function');
            
//             res();
//         }, 2000)
//     })

// }
// function thirdFunction() {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log('this is the third function');
//             res();
            
//         }, 2000)
//     })
// }
// function fourthFunction() {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log('this is the fourth function');
//             res();
            
//         }, 2000)
//     })
// }

// // firstFunction(function () {
// //     secondFunction(function() {
// //         thirdFunction(function(){
// //             fourthFunction();
// //         });
    
// //     });
    
// // });

// firstFunction().then(secondFunction).then(thirdFunction).then(fourthFunction).catch((err)=>console.log('err'))


 //advantages of callback:-

//callback helps you to run javascript async


//disadvantage of callback:-
//with many callback inside one another it creates hell which makes code complicated
//inversion of control