// Fibonacci
let num = 0
let num2 = 1
let numf = 0
let cont = 0
while (cont <= 50) {
    console.log(numf)
    numf = num + num2
    num2 = num
    num = numf
    cont++
}