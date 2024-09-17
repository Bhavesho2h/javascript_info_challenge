let emp = {
    user: 'bhavesh'
};

Object.defineProperty(emp, 'user',{
    writable: false,
    configurable: false
}) 
emp.user = 'purohit';

delete emp.user;

let descriptor = Object.getOwnPropertyDescriptors(emp,"user");





console.log(emp.user);
console.log(descriptor);


