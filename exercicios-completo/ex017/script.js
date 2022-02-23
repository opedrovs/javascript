let res = window.document.getElementsByClassName('res')[0]
        
function gerar() {
    let min = 1
    let max = 100
    res.innerHTML += `<p>Acabei de pensar no número <span class="destaque">${Math.floor(Math.random() * (max - min) + min)}</span>!</p>`

}

function limpar() {
    res.innerHTML = ''
}