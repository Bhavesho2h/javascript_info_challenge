function add(val){
    console.log(val);
}

function sum(a,b,callback){
    let value = a + b;
    console.log(callback,'callback');
    callback(value);
}

sum(1,2,add);

