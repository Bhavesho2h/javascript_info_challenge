// console.log('start');

// setTimeout(() => {
//     console.log("this is the first setTimeOut");

//     setTimeout(() => {
//         console.log('this is the secondTImeout');

//         setTimeout(() => {
//             console.log('this  is the third Timeout');
//         }, 1000)

//     }, 1000)


// }, 1000)

// console.log('end');


function firstFunction(callback) {
    setTimeout(() => {
        console.log('this is the first function');
        callback();
    }, 2000)
}
function secondFunction(callback) {
    setTimeout(() => {
        console.log('this is the second function');
        callback();
    }, 2000)

}
function thirdFunction(callback) {
    setTimeout(() => {
        console.log('this is the third');
        callback();
    }, 2000)
}
function fourthFunction() {
    setTimeout(()=>{
        console.log('fourth function');
        
    },2000)
}

firstFunction(function () {
    secondFunction(function() {
        thirdFunction(function(){
            fourthFunction();
        });
    
    });
    
});
