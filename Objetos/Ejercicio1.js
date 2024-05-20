// //Objetos

// const persona = {
//   //clave : valor
//   name: "Gonza",
//   age: 17,
//   isWorking: true,
//   pets: ["Teo", "Chester", "Wilson"],
//   walk: function () {
//     //si la funcion retorna void es que no devuelve nada, sino aclara el tipo de dato
//     return "estoy caminando";
//     //si la funcion no devuelve nada va a devolver undefined por default
//   },
// };

// console.log(persona.name);
// //otra manera de acceder al valor de un objeto
// //console.log(persona["name"]);
// console.log(persona.pets[2]);
// //si cuando estan muestro/ejecuto una funcion no le ponen los parentesis no va a funcionar
// //si pongo los () ejecuto la funcion y si no los pongo solo la llamo(no ejecuto)
// console.log(persona.walk());

// //reasignamos el valor de la propiedad age
// persona.age = 18;
// console.log(persona.age);

// //delete borra las propiedades seleccionadas del objeto
// delete persona.age;

function createObject(name, subs) {
  const canal = {
    nombre: name,
    subscriptores: subs,
    hash: name.length * subs,
    getStatus: function () {
      return `El canal de ${name} tiene ${subs}`;
    },
  };
  return canal;
}

const o = createObject("Dani", 100);
console.log(o.nombre);
console.log(o.subscriptores);
console.log(o.hash);
console.log(o.getStatus());
