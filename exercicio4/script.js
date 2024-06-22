var txtn1 = window.document.getElementById("txtn1")
var txtn2 = window.document.getElementById("txtn2")
var msg = window.document.getElementById("msg")

function verificar() {
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)

    msg.innerHTML = `Os números digitados antes foram: ${n1} e ${n2}`
    msg.innerHTML += `</br>Os números digitados em ordem inversa são: ${n2} e ${n1}`
}