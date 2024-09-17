let obj1  = {
    firstName: "bhavesh",
    lastName: "purohit"
}

let sayHi = function(homeTown,state) {
    console.log(this.firstName + " " + this.lastName + " "+ homeTown + " " + state);
}

sayHi.call(obj1,'Ahmedabad','Gujarat');

let obj2 = {
    firstName: "lionel",
    lastName: "messi"
}

sayHi.call(obj2);
