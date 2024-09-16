function fun(){
    let fname = 'bhavesh';
    return this.fname = fname;
}
console.log( new fun());