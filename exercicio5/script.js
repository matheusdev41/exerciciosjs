var txtnum = window.document.getElementById("number")
var msg = window.document.getElementById("msg")

function verificar() {
    var n = Number(txtnum.value)
    if ( n > 10 || n < 0) {
        msg.innerHTML = `Nota ${n} inválido</br>Tente outro número`
    }else{
        msg.innerHTML = `Nota digitada ${n}</br>Nota válida`
    }
}