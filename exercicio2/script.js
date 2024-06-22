var txtn1 = window.document.getElementById("txtnota1")
var txtn2 = window.document.getElementById("txtnota2")
var txtn3 = window.document.getElementById("txtnota3")
var msg = window.document.getElementById("msg")

function calcular() {
var n1 = Number(txtn1.value)
var n2 = Number(txtn2.value)
var n3 = Number(txtn3.value)
var media = (n1 + n2 + n3) / 3

msg.innerHTML = `<p>A sua média foi ${media.toFixed(2)}</p>`

if (media >= 6.5) {
    msg.innerHTML +=`APROVADO`
}
}