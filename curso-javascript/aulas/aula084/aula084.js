// Usando classes (Validando CPF)

// Utilizando exemplo real, sobre validação CPF

/*
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get() {
                return cpfEnviado.replace(/\D+/g, '');
            }
        });
    }

    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

const cpf = new ValidaCPF('070.987.720-03');

if(cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}
*/

// 705.484.450-52 / 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    éSequence() { // Não interessante usar acentos
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // Aqui eu estava chamando o this.geraDigito, sendo que this é a minha instância, e métodos estáticos é metodos da classe, basta usar o nome da class.
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) { // Claramente eu não utilizo em nenhum momento, a palavra this aqui dentro, o que significa que não preciso da instância aqui dentro (eu estou inclusive recebendo no parâmetro aqui), então quando eu não utilizo a palavra this em um método, isso significa que ele pode se tornar estático 
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequence()) return false;
        this.geraNovoCpf();
        // console.log(this.novoCPF);

        return this.novoCPF === this.cpfLimpo;
    }
}

let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99');

if (validacpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
