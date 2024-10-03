// function result(task) {

//     return new Promise((res, rej) => {
//         if (task) {
//             res('yoiu are pass');
//         }
//         else {
//             rej('you have failed');
//         }
//     })
// }

// result(true).then(()=>{console.log('passed')}).catch((err)=>{console.log('failed')});
//Promise is an object eventual completion of an async operation 
//promise solves the problem of inversion of control
// it has three stattes pending, fullfilled,completed,


const cart = ['shoes', 'pants', 'kurta'];


const validateCart = () => {
    return true;
}
//this is a consumer part
const createOrder = (cart) => {
    return new Promise((res, rej) => {
        if (!validateCart(cart)) {
            const err = new Error('Cart is not Valid');
            rej(err);
        }
        else {
            let orderId = '222';
            res(orderId);
        }

    })
}
const promise = createOrder(cart); //order Id
promise.then((orderId) => console.log(orderId));


