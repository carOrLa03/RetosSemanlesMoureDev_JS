//de decimal a binario
const pasaNumDecABin = (numero) => {
    let num = numero
    let numBinario = (num%2).toString()
    while(num > 1){
        num = parseInt(num/2)
        numBinario = num%2 + numBinario
    }
    console.log(numBinario)
}
pasaNumDecABin(147)

