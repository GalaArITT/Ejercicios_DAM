// Area para calcular
function circulo(radio){
    return  Math.PI * Math.pow(radio,2);
}

function rectangulo (b,h){
    return b*h; 
}
console.log("Area del circulo "+circulo(2));
console.log("Area rectangulo: "+ rectangulo(4,2));

