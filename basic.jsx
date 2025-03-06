function higherOrder(fn) {
    fn();
}

higherOrder(function () {

    console.log("Hello world")


    console.log("new branch added")


    console.log("this is dev branch standard code")



});