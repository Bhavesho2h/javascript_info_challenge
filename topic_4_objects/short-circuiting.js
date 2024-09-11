let user = null;
let x = 0;

user?.sayHi(x++); //no "user", so the execution does not reach sayHi call  and x++ hence the value will be 0 only

console.log(x);