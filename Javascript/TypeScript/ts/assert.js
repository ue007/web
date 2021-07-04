function swim(animal) {
    animal.swim();
}
var tom = {
    name: "Tom",
    run: function () {
        console.log("run");
    }
};
swim(tom);
// Uncaught TypeError: animal.swim is not a function`
