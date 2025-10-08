document.addEventListener("DOMContentLoaded", () => {
    carregarAvaliacaoParaEdicao();
});

document.getElementById("salvar").addEventListener("click", function(e){
    e.preventDefault(); // evita reload automático
    armazenarAvaliacao();
    window.location.href = "index.html";
});

function armazenarAvaliacao(){
    var avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];
    var id = localStorage.getItem("avaliacaoEditar"); // índice a editar

    var obj = {
        aula: document.getElementById("aula").value,
        avaliacao: document.getElementById("avaliacao").value,
        comentario: document.getElementById("comentario").value,
        formato: document.getElementById("formato").value,
        mentor: document.getElementById("mentor").value
    };

    if(id !== null){ // editar avaliação existente
        avaliacoes[id] = obj;
        localStorage.removeItem("avaliacaoEditar"); // limpa índice
    } else { // criar nova avaliação
        avaliacoes.push(obj);
    }

    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
}

function carregarAvaliacaoParaEdicao(){
    var id = localStorage.getItem("avaliacaoEditar");

    if(id !== null){
        var avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];
        var dados = avaliacoes[id];

        document.getElementById("aula").value = dados.aula || "";
        document.getElementById("avaliacao").value = dados.avaliacao || "";
        document.getElementById("comentario").value = dados.comentario || "";
        document.getElementById("formato").value = dados.formato || "";
        document.getElementById("mentor").value = dados.mentor || "";
    }
}