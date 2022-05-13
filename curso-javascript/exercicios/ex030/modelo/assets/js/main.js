function carregar() {
    const tituloPrincipal = document.querySelector('.container h1');
    
    const data = new Date();
    const dia = data.getDate();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();

    function formataSemana(diaSemana) {
        let diaSemanaTexto;
        switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
        }
    }
    const diaSemanaTexto = formataSemana(diaSemana);

    function formataMes(mes) {
        let mesTexto;
        switch (mes) {
        case 0:
            mesTexto = 'janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'feveiro';
            return mesTexto;
        case 2:
            mesTexto = 'março';
            return mesTexto;
        case 3:
            mesTexto = 'abril';
            return mesTexto;
        case 4:
            mesTexto = 'maio';
            return mesTexto;
        case 5:
            mesTexto = 'junho';
            return mesTexto;
        case 6:
            mesTexto = 'julho';
            return mesTexto;
        case 7:
            mesTexto = 'agosto';
            return mesTexto;
        case 8:
            mesTexto = 'setembro';
            return mesTexto;
        case 9:
            mesTexto = 'outubro';
            return mesTexto;
        case 10:
            mesTexto = 'novembro';
            return mesTexto;
        case 11:
            mesTexto = 'dezembro';
            return mesTexto;
        }
    }
    const mesTexto = formataMes(mes);

    function formataZero(numero) {
        return numero >= 10 ? numero : `0${numero}`;
    }

    tituloPrincipal.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${formataZero(hora)}:${formataZero(min)}`;
}
