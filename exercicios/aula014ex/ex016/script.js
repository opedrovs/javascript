function contar() {
    var tinicio = window.document.getElementById('txtinicio')
    var tfim = window.document.getElementById('txtfim')
    var tpasso = window.document.getElementById('txtpasso')
    var inicio = Number(tinicio.value)
    var fim = Number(tfim.value)
    var passo = Number(tpasso.value)
    var res = window.document.querySelector('div.res') 
    if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')        
    }
}