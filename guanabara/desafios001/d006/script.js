let res = window.document.getElementsByClassName('res')[0]
function converter() {
    let celsius = Number(window.prompt('Digite uma temperatura em ºC (Celsius)'))
    let kelvin = (celsius + 273.15).toFixed(2)
    let fahrenheit = (celsius * 9) / 5 + 32
    
    res.innerHTML = `<h2>A temperatura de ${celsius}ºC, corresponde a...</h2>`
    res.innerHTML += `<p>${kelvin}ºK (Kelvin)</p>`
    res.innerHTML += `<p>${fahrenheit}ºF (Fahrenheit)</p>`
}