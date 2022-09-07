// numeros primos hasta 100
let divisor = 2
for (let i = 2; i < 100; i++) {
    if  (i % divisor === 0 && i != 2) {
        divisor++
    }else{
        console.log(`${i} es primo`)   
    }
}

