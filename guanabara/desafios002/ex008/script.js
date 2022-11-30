let res = window.document.getElementById('res')
function calcular() {
    let num = Number(window.prompt('Digite um número:'))
    res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${num}</strong></p>`
    res.innerHTML += `<hr>`
    res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(num)}</p>`
    res.innerHTML += `<p>A sua parte inteira é ${parseInt(num)}</p>`
    res.innerHTML += `<p>O valor inteiro mais próximo ${Math.round(num)}</p>`
    res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>`
    res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(num)}</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${num*num}</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${num*num*num}</p>`
}