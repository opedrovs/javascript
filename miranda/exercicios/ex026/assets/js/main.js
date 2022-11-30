function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function calcularImc(evento) {
        evento.preventDefault();
        let peso = document.querySelector('.peso').value;
        let altura = document.querySelector('.altura').value;

        function isNumber(valor) { // Verificar se o valor se comporta como um número ou é um número, Exemplo: "1", "12", 5, etc...
            return !isNaN(parseFloat(valor)) && isFinite(valor);
        }

        if (peso.length === 0 || altura.length === 0 || isNumber(Number(peso)) === false || isNumber(Number(altura)) === false) {
            resultado.style.backgroundColor = '#e97070';
            if (peso.length === 0 || isNumber(Number(peso)) === false) {
                resultado.innerHTML = '<p>Peso inválido</p>';
            } else if (altura.length === 0 || isNumber(Number(altura)) === false) {
                resultado.innerHTML = '<p>Altura inválido</p>';
            }
        } else {
            peso = Number(peso);
            altura = Number(altura);
            const imc = (peso / (altura*altura)).toFixed(2);
            let situacao;
            if (imc >= 0 && imc <= 18.5) {
                situacao = 'Abaixo do peso'
            } else if (imc <= 24.9) {
                situacao = 'Peso normal'
            } else if (imc <= 29.9) {
                situacao = 'Sobrepeso'
            } else if (imc <= 34.9) {
                situacao = 'Obesidade grau 1'
            } else if (imc <= 39.9) {
                situacao = 'Obesidade grau 2'
            } else {
                situacao = 'Obesidade grau 3'
            }
            resultado.style.backgroundColor = '#95f795';
            resultado.innerHTML = `<p>Seu IMC é ${imc} (${situacao})</p>`;
        }
    }

    form.addEventListener('submit', calcularImc);
}
meuEscopo();
