const fun = async() => {
    setTimeout(()=>{
        console.log('hello world');
    },2000)

    let res = await resultfun();
    
}

const resultfun = async() => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('running result fun');
        },2000)
        resolve();
    })
}

fun();
