const objeto = { a: true, b: 42, c: false };

function getBoolean(objeto) {
  const arr = [];
  for (const propiedad in objeto) {
    if (objeto[propiedad] === true || objeto[propiedad] === false) {
      arr.push(propiedad);
    }
  }
  return arr;
}

console.log(getBoolean(objeto));
