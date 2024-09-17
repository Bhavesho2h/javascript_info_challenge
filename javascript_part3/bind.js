let obj1 = {
    firstName: 'bhavesh',
    lastName: 'purohit'
}

let sayHi = function() {
    console.log(this.firstName + " " + this.lastName);
}

let obj2 = {
    firstName: "Lionel",
    lastName: "messi"
}

let learningbind = sayHi.bind(obj2);
console.log(learningbind,'learningbind');
learningbind()
