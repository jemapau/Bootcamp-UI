# Javascript

/* On Javascript there is always a Scope, a context {} and there is also a Global context*/

## This

Is the only proper of a function, not even an other function on it can access it.


function functionName() {
  this.name = "maria";
  function saludar() {
    console.log("hi" + this.name);
  }
}

var a = function a() {
  function b() {

  }

  this.b = () => {

  }
}


// Hoisting

Cuando uso una variable que no esta definida y es un error.


##Notes

function functionName() {
   //made something here
}

var thisFunction = function functionName() {
  //Made something here
}

var thisFunction = function() {
  //Made something here
}

var thisFunction = () => {
  //Made something here
}

thisFunction();

/* */

function a() {
  var name = "my name";
  return name;
}

function b() {
  return a;
}


/* A this function */
var a = function a() {
  function b() {

  }

  this.b = () => {

  }
}

/* On Javascript there is always a Scope, a context {} and there is also a Global context*/


/* let, var, const */

//var - cambia, no me permite ser re declararada en otra funcion y afecta en cualquier lugar
//const - se mantiente
//let  - solo pertenece a un contexto especifico {}, y no se hereda.
/*     - Permite declarar una funcion  nuevamente solo si esta determinado por distintos
        contextos. */

if() {} elseif(){} else {}
