const txtl = window.document.getElementById("txtl")
const msg = window.document.querySelector("div#msg")

function verificar() {
    const letra = txtl.value;
    msg.innerHTML = `A letra digitada foi <strong>${letra}</strong>`

    if (letra.length > 1) {
        msg.innerHTML = "Erro, digite apenas uma letra"
    } else if (letra == "a" || letra == "e" 
    || letra == "i" || letra == "o" || letra == "u") {
        msg.innerHTML += `<p>Você digitou uma vogal!`
    } else {
        msg.innerHTML += "<p>Você digitou uma consoante!"
    }
}