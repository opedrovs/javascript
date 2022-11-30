// npm init -y -> Iniciar o NPM
// npm install express -> Instalar um pacote (instalando express de exemplo)

// "dependencies" são as dependências do projeto, "devDependencies" são dependências de desenvolvimento, Webpack, Babel, são dependências de desenvolvimento porque elas já geram o nosso arquivo final, só quando estamos desenvolvendo (como colocar webpack para assistir código, ele salva, e ele pega o código, e transforma em outro código e manda para o bundle.js). Quando fazermos o deploy da nossa aplicação no servidor, na verdade será usado o Bundle, e não o código fonte.

// npm install express --save-dev -> Para mover express para parte de devDependencies
// npm install express --save-prod -> Para mover express para parte de dependencies
// npm install express@2.1.0 -> Instalar versão específica do express
// npm outdated -> Verificar quais pacotes estão desatualizados
// npm update -> Para atualizar os pacotes desatualizados
// npm uninstall express -> Para desinstalar um pacote
