let text1, text2
let sumText1 = 0
let sumText2 = 0
const checkPalabras = (text1, text2) =>{
    for (let i = 0; i < text1.length; i++) {
        sumText1 += text1.codePointAt(i)
         
      }
    for (let i = 0; i < text2.length; i++) {
         sumText2 += text2.charCodeAt(i)
       }
    if (sumText1 == sumText2) {
        return `${text1} y ${text2} es un anagrama` 
        
      } else {
        return `${text1} y ${text2} NO es un anagrama`
      }
}
console.log(checkPalabras('pepe', 'sejo'))