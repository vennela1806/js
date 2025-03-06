function higherOrder(fn) {
    fn();
}

higherOrder(function () {

    console.log("Hello world")


    console.log("new branch added")


    console.log("this is main branch standard ")
});