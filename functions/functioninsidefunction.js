const fun = () => {
    console.log('this is first function');
    debugger;
    const fun2 = () => {
        console.log('this is second function');
    }
    fun2();
}
fun();