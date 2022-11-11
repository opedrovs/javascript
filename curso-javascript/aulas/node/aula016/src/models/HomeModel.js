const mongoose = require('mongoose');

// Esquema/Modelagem dos nosso dados
const HomeSchema = new mongoose.Schema({ // O mongodb não está nem aí como seus dados vão ser salvos lá, então cabe a nós tratar e modelar esses dados para jogar lá, é um NoSQL, ele não tem coisas que geralmente vemos em base de dados, que é a validação de dados, confirmação quando salvou, não tem esquema 
    titulo: { type: String, required: true },
    descricao: String
}); // O titulo precisa ser uma String, e tem que ser enviado (requerido), já a descrição precisa ser apenas String

const HomeModel = mongoose.model('Home', HomeSchema);

// Geralmente no model, criamos uma classe, validamos os dados, e por último faremos o module.exports.

class Home {

}

module.exports = Home;
