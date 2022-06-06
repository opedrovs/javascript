// Polimorfismo

// É uma maneira de fazer métodos se comportarem de maneira diferente em subclasses (subclasse se refere a classes filha de uma classe pai)
// classe = função construtora

// Classe de conta bancária -> conta poupança e conta corrente

// Superclass (classe pai/mãe)
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
    // Toda conta vai ter métodos: sacar, depositar, ver saldo, todos os métodos vão ter, tanto corrente como poupança, mas o método sacar vai se comportar de forma diferente na poupança e corrente
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function CC(agencia, conta, saldo, limite) { // CC = Conta Corrente
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// Vamos sobrescrever o método sacar (a diferença entre esse sacar e o outro, é que nesse podemos sacar até negativo)
CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

function CP(agencia, conta, saldo) { // CC = Conta Poupança
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

console.log();

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);
