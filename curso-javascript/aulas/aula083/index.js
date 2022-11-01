// Métodos de instância e estáticos

// Métodos estáticos - São métodos que você pode acessar na classe, sem instânciar a classe (sem utilizar a palavra new), basicamente são funções normais que estão dentro da minha classe por questão de organização e só esta ligado a classe

/*

function teste() { // Eu posso chamar essa função em qualquer lugar
    console.log('Este é meu teste.');
    // console.log(this);
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        // teste();
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log(this.volume);
    }
}

// Método instância - É quando a gente instância a classe (quando usa a palavra new), e cria os dados para esse objeto, quando instância a classe, nós criamos novo objeto no caso. Ele recebe os dados da instância.

// Método estático - São basicamente funções normais, que estão dentro da sua classe, talvez por questão de organização, queira um método que faça alguma coisa na classe, que só está ligado na classe.


const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

// Como pode ver, eu estou chamando a classe sem a palavra new, eu não tenho uma instância, então eu não tenho acesso aos dados da instância. Pois quando eu não uso a palavra new, o construtor não é chamado e eu não tenho essas coisas referentes a instância que é criado.
ControleRemoto.trocaPilha();

*/

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        // teste();
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático

    // Podemos colocar parâmetros
    static soma(x, y) {
        return x + y;
    }
}

console.log(ControleRemoto.soma(5, 6));
