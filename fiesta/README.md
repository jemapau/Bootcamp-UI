# Javascript exercise

This is an exercise to apply the basis of Javascript. A Party!

## Types of data:

String, number, boolean, Undefined, NaN, null

## Complex data:

 object, function

 array


## Image

![Radio Station](https://image.prntscr.com/image/XP0lKkuyRFyu_D3UJTIjLg.png)


## Notes



      console.log("hello!");
      var name = "maria";
      var number = 2;
      /* Types of data: string, number, boolean, indefined, NaN, null*/
      /* Complex data: array, object, function */

      var ages = [1,2];

      // object
      var me = {
        name: "Maria",
        lastname: "Arenas"
      };

      // function
      //function saludar(name) {
        //return "Hi " + name;
      //}

      var myFunction = function saludar(name) {
        return "Hi " + name;
      }

      //Cuando yo guardo una funcion en la variable ya solo puedo
      // acceder  a traves de la variable

      // Typeof return a the type of data of a variable
      console.log(typeof(ages));
      console.log(myFunction("Maria"));

      var a = 10;
      var b = a;
      a = 20;
      console.log(b);

      var j = {nombre: "sebas", apellido: "gomez"};
      var k = j;
      j = "Juan";
      console.log(k);

      var myEstamosMelos = document.querySelector(".estamosMelos");
      // var myEstamosMelos = document.querySelector("div");
      console.log(myEstamosMelos);

      /* Styles */
      //document.querySelector(".estamosMelos").style.background = 'blue';
      //document.querySelector(".estamosMelos").style.color = 'white';
