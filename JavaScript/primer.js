/* Tipos de datos basicos */

var numero = 1; //Asignamos el valor a una variable tipo number
var palabra = 'palabra'; //asignamos el valor de una variable tipo string

//-----------------------------------------------------------------------------------//

/*Definimos variables con la palabra reservada let 
para evitar el llamado de la misma o de las mismas desde cualquier parte del codigo*/
let numero2 = 2;
let palabra = 'palabra 2';

//-----------------------------------------------------------------------------------//

/*Definimos constantes con la palabra reservada const*/
const numConstante = 4 //Siempre que sepan que no van a mutar o modificar un valor usan CONST

console.log("Numero ". numConstante);

//-----------------------------------------------------------------------------------//

//Condicionales

const edad1 = 10;
const edad2 = 20;
const edad3 = 18;

if(edad3>=18){
    console.log('sos mayor de edad')
}else{
    console.log('sos menor de edad')
}

//-----------------------------------------------------------------------------------//

//Bucles y Arrays

const array = [2,3,"pepe"];

//mientras
while(array.length < 1){
    console.log("test")
}

//Bucle for
for(let i = 1; i < array.length; i++){//Siempre adentro del for van a usar let
    console.log('Pocision', i)
    console.log('Valor', array[i])
}
for(let i = 1; i < array.length; i++){//Siempre adentro del for van a usar let
    console.log("Pocision", i,"Valor", array[i])
}


//////////////////////////////////
