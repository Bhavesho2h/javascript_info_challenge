let obj1 = {
    fName: "bhavesh"
}

let obj2 = {
    lName: "purohit"
}

obj2.__proto__ = obj1;
console.log(obj2.fName);
console.log(obj1.lName);