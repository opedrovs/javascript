function rand(min, max) { return Math.floor(Math.random() * (max - min) + min)};

const simbolos = '^!@#$%¨&*§ª°~/+-_()[]{}.;:,';
const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

function validaCampoCaracteres(caracteres) {
    if(caracteres <= 0) return true;
    return false;
}

function validaCamposChecked(conterNumeros, conterMaiusculas, conterMinusculas, conterSimbolos) {
    if(!conterChecked(conterNumeros) && !conterChecked(conterMaiusculas) && !conterChecked(conterMinusculas) && !conterChecked(conterSimbolos)) return true;
    return false;
}

function conterChecked(elem) {
    return elem.checked ? true : false;
}

export default function criaSenha(caracteres, conterNumeros, conterMaiusculas, conterMinusculas, conterSimbolos) {
    if(validaCampoCaracteres(caracteres)) {
        return 'Número caracteres inválido!';
    } else if(validaCamposChecked(conterNumeros, conterMaiusculas, conterMinusculas, conterSimbolos)) {
        return 'Nada selecionado';
    } else {
        const senha = [];
        let cont = 0;
        while(cont < caracteres) {
            if(conterChecked(conterMaiusculas) && cont < caracteres) {
                senha.push(alfabeto[rand(0, 25)].toLocaleUpperCase());
                cont++;
            }
            if(conterChecked(conterMinusculas) && cont < caracteres) {
                senha.push(alfabeto[rand(0, 25)].toLocaleLowerCase());
                cont++;
            } 
            if(conterChecked(conterNumeros) && cont < caracteres) {
                senha.push(rand(1, 9));
                cont++;
            }
            if(conterChecked(conterSimbolos) && cont < caracteres) {
                senha.push(simbolos[rand(0, 11)]);
                cont++;
            }
        }
        return senha.join('');
    }
}
