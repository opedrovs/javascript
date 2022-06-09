// Minha solução
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const cpf = document.querySelector('#cpf');
const usuario = document.querySelector('#usuario');
const senha = document.querySelector('#senha');
const repeatSenha = document.querySelector('#repeat-senha');

class ValidaFormulario {
    constructor(nome, sobrenome, cpf, usuario, senha, repeatSenha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.usuario = usuario;
        this.senha = senha;
        this.repeatSenha = repeatSenha;

        this.validarCPF();
        this.validarUsuario();
        this.senhaSegura();
        this.verificarCampo();
    }

    validarCPF() {
        const validacpf = new ValidaCPF(this.cpf.value);
        if(!validacpf.valida()) {
            const campo = document.getElementsByClassName('campoInvalido')[0];
            campo.innerHTML = '<p>Digite um CPF válido.</p>'
        }
    }

    validarUsuario() {
        if(this.usuario.value.length < 3 || this.usuario.value.length > 12) {
            const campo = document.getElementsByClassName('campoInvalido')[1];
            campo.innerHTML = `<p>Usuário inválido.</p>`
        }
    }

    senhaSegura() {
        this.tamanhoSenha();
        this.senhaIguais();
    }

    senhaIguais() {
        if(this.senha.value !== this.repeatSenha.value) {
            const igualSenha = document.getElementsByClassName('igual')[0];
            igualSenha.innerHTML = `<p>Campo senha e repetir senha devem ser iguais.</p>`;
        }
        if(this.senha.value !== this.repeatSenha.value) {
            const igualSenha = document.getElementsByClassName('igual')[1];
            igualSenha.innerHTML = `<p>Campo senha e repetir senha devem ser iguais.</p>`;
        }
    }

    tamanhoSenha() {
        if(this.senha.value.length < 6 || this.senha.value.length > 12) {
            const caracSenha = document.getElementsByClassName('caracSenha')[0];
            caracSenha.innerHTML = `<p>Senha entre 6 e 12 caracteres.</p>`;
        }
        if(this.repeatSenha.value.length < 6 || this.repeatSenha.value.length > 12) {
            const caracSenha = document.getElementsByClassName('caracSenha')[1];
            caracSenha.innerHTML = `<p>Senha entre 6 e 12 caracteres.</p>`;
        }
    }

    verificarCampo() {
        this.validarCamposVazios();
    }

    validarCamposVazios() {
        const itens = [this.nome, this.sobrenome, this.cpf, this.usuario, this.senha, this.repeatSenha];
        for(let pos in itens) {
            if(itens[pos].value.length === 0) {
                const campos = ['Nome', 'Sobrenome', 'CPF', 'Usuário', 'Senha', 'Repetir senha'];
                const carac = document.getElementsByClassName('carac')[pos];

                carac.innerHTML = `<p>Campo "${campos[pos]}" não pode estar vazio</p>`;
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
        new ValidaFormulario(nome, sobrenome, cpf, usuario, senha, repeatSenha);
    }
});
