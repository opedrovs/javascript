const form = document.querySelector('.form');
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const cpf = document.querySelector('#cpf');
const usuario = document.querySelector('#usuario');
const senha = document.querySelector('#senha');
const repeatSenha = document.querySelector('#repeat-senha');

class ValidaForm {
    constructor(nome, sobrenome, cpf, usuario, senha, repeatSenha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.usuario = usuario;
        this.senha = senha;
        this.repeatSenha = repeatSenha;

        this.contemLetrasNumeros();
        
        const novoCpf = new ValidaCPF(this.cpf.value);
        if(!novoCpf.valida()) {
            const msg = document.getElementsByClassName('msg')[2];
            msg.innerHTML = `<p>Digite um CPF válido.</p>`;
        }

        this.verificarCamposVazio();
    }

    verificarCamposVazio() {
        const items = [this.nome, this.sobrenome, this.cpf, this.usuario, this.senha, this.repeatSenha];
        
        for(let item in items) {
            if(items[item].value.length === 0) {
                const campos = ['Nome', 'Sobrenome', 'CPF', 'Usuário', 'Senha', 'Repetir senha'];
                
                const msg = document.getElementsByClassName('msg')[item];

                msg.innerHTML = `<p>Campo "${campos[item]}" não pode estar vazio</p>`;
            }
        }
    }
}

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
};

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};


document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;

    if(el.classList.contains('enviar')) {
        new ValidaForm(nome, sobrenome, cpf, usuario, senha, repeatSenha);
    }
});
