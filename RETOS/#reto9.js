// código morse a texto normal y viceversa
let codMorse = new Map([
    ['A','.-'],
    ['B','-...'],
    ['C','-.-.'],
    ['D','-..'],
    ['E','.'],
    ['F','..-.'],
    ['G','--.'],
    ['H','....'],
    ['I','..'],
    ['J','.---'],
    ['K','-.-'],
    ['L','.-..'],
    ['M','--'],
    ['N','-.'],
    ['Ñ','--.--'],
    ['O','---'],
    ['P','.--.'],
    ['Q','--.-'],
    ['R','.-....'],
    ['T','-'],
    ['U','..-'],
    ['V','...-'],
    ['W','.--'],
    ['X','-..-'],
    ['Y','-.--'],
    ['2','..---'],
    ['3','...--'],
    ['4','....-'],
    ['5','.....'],
    ['6','-....'],
    ['7','--...'],
    ['8','---..'],
    ['9','----.'],
    ['.','.-.-.-'],
    [',','--..--'],
    ['?','..--..'],
    ['“','.-..-.'],
    ['!','-.-.--'],
    ['@','.--.-.'],
    ['=','-...-'],
    ['+','.-.-.'],
    ['&','.-...'],
    [' ','/']
])

const pasaMorse = (texto) => {
    let textoMay = Array.from(texto.toUpperCase())
    let textMorse = ''
    for (const caracter of textoMay) {
        textMorse += codMorse.get(caracter)
    }
    console.log(textMorse)
}
pasaMorse('hola mundo, me llamo carmen')
// textAtraducir('')
// const textMorse = (textoMorse) => {
//     let enMorse = textoMorse
//     if(enMorse === undefined){
//         console.log('ERROR')
//     }
    
//     console.log(enMorse)
// }


