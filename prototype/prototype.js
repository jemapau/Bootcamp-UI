// var Person = {
//     name: "Maria",
//     lastName: "Arenas",
//     gender: "Female"
// }

// Constructor
function Person(name, lastName, gender) {
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
}


Person.prototype.introduce = function(){
    console.log(`Hi I'm ${this.name} ${this.lastName}`);
}

var personOne = new Person('Mariangel', 'Arenas', 'Woman');

personOne.introduce();