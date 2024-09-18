class Animal{
    constructor(name){
        this.name = name;
    }
   static sayHi(name){
        console.log(`my name is ${name}`);
    }
}

// let user = new Animal('bhavesh');
// user.sayHi();


//now how to access static objects
let name = 'cow'
Animal.sayHi(name);
