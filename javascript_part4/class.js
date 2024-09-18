class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printMe(){
        console.log("i am printing this");
    }

}

const obj = new Person();
obj.printMe();
