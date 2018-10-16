var Persona = {
    name: "MariaS",
    lastName: "Arenas"
}


function Person(name, lastName, gender) {
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
}


Person.prototype.introduce = function(){
    console.log(`Hi I'm ${this.name} ${this.lastName}`);
}

// herencia o delegacion, le esta heredando propiedades a otro objeto.

Developer.prototype.introduceAboutJob = function() {
    console.log(`Hi i'm ${this.name} ${this.lastName} and i have` );
}

var me4 = new Developer("andres", "soto, "h", 5);

me4.introduce();
me4.introduceAboutJob();

class PersonWithClass {
    constructor(name, lastName, gender){
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
    }
}

//metodo super, permite compartir propiedades que se comparten entre objetos