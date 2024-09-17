

const fun = () => {
    let date = new Date().toLocaleTimeString();
    console.log(date);
}

var inter = setInterval(fun,1000); //this will run for every 1 second

setTimeout(()=>{
 clearInterval(inter);   
},10000);