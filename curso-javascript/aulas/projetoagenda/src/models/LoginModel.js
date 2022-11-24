const mongoose = require('mongoose');
const validator = require('validator'); // Estamos usando isso para validar nosso e-mail, poderiamos ter usado expressões regulares se quisermos

const LoginSchema = new mongoose.Schema({ 
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login { // Validação completa na classe
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() { // Utilizamos async await para esperar usuário ser criado 
        this.valida();
        if(this.errors.length > 0) return;
        try {
            this.user = await LoginModel.create(this.body); // Aqui criamos o usuário. Se usuário for criado, podemos acessar ele de fora
        } catch(e) {
            console.log(e);
        }
    }

    valida() {
        this.cleanUp();

        // Validação
        // O e-mail precisa ser válido
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        // A senha precisa ter entre 3 e 50 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }

    cleanUp() { // Vai garantir que tudo que está dentro do body é uma string
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = { // O _csrf vai vir junto com body, então aqui estamos garantindo que o objeto vai conter apenas email e password
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;
