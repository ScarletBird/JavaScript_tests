function mensagem(){
    alert("NO TOUCHY");
}

function mudaCor(cor){
    var elem = document.getElementById("mensagem");
    elem.style.color = cor;

}

function valida(){
    var elem = document.getElementById("nome");

    if (elem.value == ""){
        alert("VC É BURRO KCT");
    } else {
        alert("BOA PARÇA");
    }
}