class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name + ' '}`)
    }
}

class Dog extends Animal {
constructor(name){
    super(name);
}
}

let somethinhg = new Dog('bruno');
somethinhg.speak();