// Herança com Classes

// Não é bom ter muitos extends, mais aclopado, específico ele fica, não é bom fazer uma hierarquia muito grande, se não o código acaba virando uma teia de aranha, o que vai deixando mais difícil encontrar bugs, e muito frágil.

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // extends - vai falar de quem vou herdar (no caso DispositivoEletronico)
    constructor(nome, cor, modelo) {
        super(nome); // É a superclass (classe pai) / Similar ao .call()
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() { // Esse método está só no tablet (pois, ele reconfigurou o método ligar)
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi() { // Esse método está só no tablet
        console.log('Oi'); 
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.ligar();
t1.falaOi();
