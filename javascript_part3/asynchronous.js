
const fun2 = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('data fetched');
        },2000)
    })
}

const fun1 = async() => {
    console.log('fetching data....');
    const response = await fun2();
    console.log(response);
}

fun1();