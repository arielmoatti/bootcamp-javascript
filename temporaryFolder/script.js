function ConsObject(firstName, surname) {
    this.name = firstName;
    this.lastName = surname;
    this.address = function () {
        console.log("not yet");
    };
}

ConsObject.prototype.newMethod = function () {
    consolfe.log("enter number");
};
ConsObject.prototype.inBerlin = "no";
var ariel = new ConsObject("Ariel", "Moatti");
ariel.address();
console.log("ariel", ariel);
var ananda = new ConsObject("Ananda", "Lopez");
console.log("ananda", ananda);
var rubi = new ConsObject("Rubi", "Rasus");
console.log("rubi", rubi);
