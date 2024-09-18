class Animal{
    constructor(name){
        this.name = name;
    }
   static sayHi(){
        console.log(`my name is ${this.name}`);
    }
}

let user = new Animal('bhavesh');
user.sayHi();

