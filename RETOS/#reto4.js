/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
let poligono = ''
const triangulo = 'triangulo'
const cuadrado = 'cuadrado'
const rectangulo = 'rectangulo'
let base = 0
let altura = 0
const calcAreaPoligono = (poligono, base, altura) => {
    if (poligono.includes(triangulo)) {
        return base * altura / 2
    }
    if (poligono.includes(cuadrado)) {
        return Math.pow(base, 2)
    }
    if (poligono.includes(rectangulo)) {
        return base * altura
    }
};

console.log(calcAreaPoligono('rectangulo', 25, 75))