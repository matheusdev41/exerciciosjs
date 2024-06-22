var txtn1 = window.document.getElementById("txtn1")
var txtn2 = window.document.getElementById("txtn2")
var txtn3 = window.document.getElementById("txtn3")
var msg = window.document.getElementById("msg")

function verificar() {
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var n3 = Number(txtn3.value)

    msg.innerHTML = `Os números digitados foram ${n1}, ${n2} e ${n3}<br/>`

    if (n1 > n2 && n1 > n3) {
        msg.innerHTML += `O maior número digitado foi ${n1}` 
    } else if (n2 > n1 && n2 > n3) {
        msg.innerHTML += `O maior número digitado foi ${n2}`
    } else {
        msg.innerHTML += `O maior número digitado foi ${n3}`
    }

}