/*// while

const array = ["Gonzalo Alarcon", "Pizza", "Papas"];

let contador = 0;

while (contador < array.length) {
  console.log(array[contador]);
  contador++;
}

//for

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//foreach

array.forEach((element) => {
  console.log(element);
});
*/

const lista = [1, 2, 3, 4, 5, 6, 7];

function sumarPares(numeros) {
  let suma = 0;
  let i = 0;

  while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
    i++;
  }
  return suma;
}
console.log(sumarPares(lista));
