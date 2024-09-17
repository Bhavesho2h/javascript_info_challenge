let obj1 = {
    firstName:'bhavesh',
    lastName:'Purohit',
    fun1: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

let obj2 = {
    firstName:'Lionel',
    lastName: 'Messi'
}

obj1.fun1.call(obj2);