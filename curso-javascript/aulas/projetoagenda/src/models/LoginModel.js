const mongoose = require('mongoose');
const validator = require('validator'); // Estamos usando isso para validar nosso e-mail, poderiamos ter usado expressões regulares se quisermos
const bcryptjs = require('bcryptjs'); // Salvar senhas como hash

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

    async login() {
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push('Usuário não existe.');
            return;
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) { // Comparando a nossa senha com a senha hash do banco de dados
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }
    }

    async register() { // Utilizamos async await para esperar usuário ser criado 
        this.valida();
        if(this.errors.length > 0) return;
        
        await this.userExists(); // Verificar se já existe e-mail cadastrado

        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt); // Estamos gerando um salt, fazendo hash na senha, baseado no valor da senha, se baseando no salt que ele criou

        this.user = await LoginModel.create(this.body); // Aqui criamos o usuário. Se usuário for criado, podemos acessar ele de fora
        
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email }); // Aqui estou encontrando um registro na base de dados, que tenha o email que seja igual ao email que estou enviando
        if(this.user) this.errors.push('Usuário já existe.');
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
