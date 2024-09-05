let user = {
    name: "Bhavesh",
    age:23
}
console.log(user.name);

//Now I am trying to clone an object

let clone = {}

for(let key in user){
    clone[key] = user[key];
}
console.log(clone.name)