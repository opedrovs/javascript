const mongoose = require('mongoose');
const validator = require('validator');

// O default vazio, significa que se não for enviado, ele salva como uma string vazia
const ContatoSchema = new mongoose.Schema({ 
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

// Utilizando o constructor function, é a mesma coisa que o class, só muda o jeito de escrever
function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.buscaPorId = async function(id) { // A função não está atrelada ao prototype, então não preciso instanciar para poder usar a função, seria uma função ESTÁTICA
    if(typeof id !== 'string') return;
    const user = await ContatoModel.findById(id); // Isso vai me retornar usuário ou vai retornar null
    return user;
}

Contato.prototype.register = async function() {
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function() {
    this.cleanUp();

    // Validação
    // O e-mail precisa ser válido
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido'); // Se email for enviado, você válida, se não, passa para o próximo
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
    if(!this.body.email && !this.body.telefone) this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
};

Contato.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    };
};

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true }); // { new: true } - quando atualizar os contatos, me envia os dados atualizados
    
    // findByIdAndUpdate - Encontre o contato por id, e atualize os seus dados
};

module.exports = Contato;
