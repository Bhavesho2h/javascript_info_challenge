function createUser(username, score) {
    this.username = username;
    this.score = score;

}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
 console.log(this.score);   
}



const chai = new createUser("chai",25); //jab tak new nahi dalenge tab tak kuch inject nahi hua hoga sab hava me hoga
const tea = createUser('tea',250);

chai.printMe();