function result(task) {

    return new Promise((res, rej) => {
        if (task) {
            res('yoiu are pass');
        }
        else {
            rej('you have failed');
        }
    })
}

result(true).then(()=>{console.log('passed')}).catch((err)=>{console.log('failed')});