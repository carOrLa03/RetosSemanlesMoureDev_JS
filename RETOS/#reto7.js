// contador de palabras iguales
let string = 'Cuando yo digo Diego, digo digo, y cuando digo digo, digo Diego'
const regexp = /[,\s\t¿!¡;:\.\?#@() "]/g
const arrayPalabras = string.replaceAll(',', '').split(regexp)//reemplazo las comas y creo un array de las palabras de la cadena quitando valorArray espacio en blanco
// forEach
const resultado = {}
arrayPalabras.forEach(valorArray => (resultado[valorArray] = resultado[valorArray] + 1 || 1))
console.log(resultado)



