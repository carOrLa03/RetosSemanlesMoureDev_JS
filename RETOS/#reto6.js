// invirtiendo cadenas
let string = 'como estas Pepe'
let stringInverso = ''
for (let index = 0; index <= string.length; index++) {
    stringInverso += string.charAt(string.length - index)
    
}
console.log(stringInverso)
