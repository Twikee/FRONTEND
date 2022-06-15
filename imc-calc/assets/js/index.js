const calcularIMC = () => {
    const btnCalc = document.getElementById('calcular');
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    const result = peso * (Math.pow(altura, 2));
    
}