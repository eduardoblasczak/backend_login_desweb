document.addEventListener("DOMContentLoaded", function(){
    carregarHabilidadesParaEdicao();
});


document.getElementById("salvar").addEventListener("click", function(){
    salvarHabilidade();
    window.location.href = "index.html";
});

function salvarHabilidade() {
    var habilidades = JSON.parse(localStorage.getItem("habilidades")) || [];
    var id = localStorage.getItem("habilidadeEditar"); // índice a editar

    var obj = { 
        habilidade: document.getElementById("habilidade").value,
        descricao: document.getElementById("descricao").value,
        nivel: document.getElementById("nivel").value,
        cursos: document.getElementById("cursos").value
    };
    if(id !== null){ // editar habilidade existente
        habilidades[id] = obj;
        localStorage.removeItem("habilidadeEditar"); // limpa índice
    } else { // criar nova habilidade
        habilidades.push(obj);
    }
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
}

function carregarHabilidadesParaEdicao(){
    var id = localStorage.getItem("habilidadeEditar");

    if(id !== null){
        var habilidades = JSON.parse(localStorage.getItem("habilidades")) || [];
        var dados = habilidades[id];

        document.getElementById("habilidade").value = dados.habilidade || "";
        document.getElementById("descricao").value = dados.descricao || "";
        document.getElementById("nivel").value = dados.nivel || "";
        document.getElementById("cursos").value = dados.cursos || "";
    }
}