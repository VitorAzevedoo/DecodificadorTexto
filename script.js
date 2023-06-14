function encriptar() {
    let texto = document.getElementById("texto").value;
    let mensagemtitulo = document.getElementById("mensagemtitulo");
    let mensagem = document.getElementById("mensagem");
    let boneco = document.getElementById("boneco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensagemtitulo.textContent = "Texto encriptado com sucesso!";
        mensagem.textContent = "";
        boneco.src = "mao.jpg";
    } else {
        boneco.src = "boneco.png";
        mensagemtitulo.textContent = "Nenhuma mensagem foi encontrada";
        mensagem.textContent = "Digite o texto que deseja encriptar ou desencriptar";
        alert("Escreva um texto!");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let mensagemtitulo = document.getElementById("mensagemtitulo");
    let mensagem = document.getElementById("mensagem");
    let boneco = document.getElementById("boneco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        mensagemtitulo.textContent = "Texto desencriptado com sucesso!";
        mensagem.textContent = "";
        boneco.src = "mao.jpg";
    } else {
        boneco.src = "boneco.png";
        mensagemtitulo.textContent = "Nenhuma mensagem foi encontrada";
        mensagem.textContent = "Digite o texto que deseja encriptar ou desencriptar";
        alert("Escreva um texto!");
    }
}
