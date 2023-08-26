
function encriptar() {
    document.getElementById("cuadro2").style.backgroundImage = "none"; 

    const letras = {
        "a": "ai",
        "e": " ",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };
    
    const texto = document.getElementById("cuadro").value;
    let newtexto = texto.replace(/[aeiou]/g, vocal => letras[vocal]);

    document.getElementById("cuadro2").value = newtexto;

}


function desencriptar() {

    const letras = {
        "ai": "a",
        " ": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };
    
    const texto = document.getElementById("cuadro").value;
    let newtexto = texto.replace(/(ai| |imes|ober|ufat)/g, match => letras[match]);

    document.getElementById("cuadro2").value = newtexto;

}