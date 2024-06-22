var txti = window.document.getElementById('inicio')
var txtfim = window.document.getElementById('fim')
var txtpasso = window.document.getElementById('passo')
var msg = window.document.getElementById("msg")

function verificar () {
    var inicio = Number(txti.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    
    for(var c = inicio; c <= fim; c += passo) {
        msg.innerHTML += `${c} `
    }
}