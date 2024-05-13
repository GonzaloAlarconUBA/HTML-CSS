/*metodo push

const frutas = ["banana", "frutilla"];
const nuevaFruta = ["pera"];

console.log(frutas);

frutas.push(nuevaFruta);

console.log(frutas);

//metodo shift

const frutaEliminada = frutas.shift();
console.log(frutaEliminada);

*/

const array = ["Gonzalo Alarcon", "Pizza", "Papas"];

function procesandoPedido(pedidos) {
  const nombre = pedidos.shift();
  pedidos.unshift("Coca");
  pedidos.push(nombre);
  return pedidos;
}

console.log(procesandoPedido(array));
