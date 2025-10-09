document.addEventListener("DOMContentLoaded", function(){
    carregarHabilidadesParaEdicao();
});

document.getElementById("salvar").addEventListener("click", function(){
    salvarCategoria();
    window.location.href = "index.html";
});

function salvarCategoria() {
    var categorias = JSON.parse(localStorage.getItem("categorias")) || [];
    var id = localStorage.getItem("categoriaEditar"); // índice a editar

    var obj = {
        nome: document.getElementById("nome").value,
        prioridade: document.getElementById("prioridade").value,
        dataCriacao: document.getElementById("dataCriacao").value   
    };
    if(id !== null){ // editar categoria existente
        categorias[id] = obj;
        localStorage.removeItem("categoriaEditar"); // limpa índice
    } else { // criar nova categoria
        categorias.push(obj);
    }
    localStorage.setItem("categorias", JSON.stringify(categorias));
}
function carregarHabilidadesParaEdicao(){
    var id = localStorage.getItem("categoriaEditar");
    if(id !== null){
        var categorias = JSON.parse(localStorage.getItem("categorias")) || [];
        var dados = categorias[id];

        document.getElementById("nome").value = dados.nome || "";
        document.getElementById("prioridade").value = dados.prioridade || "";
        document.getElementById("dataCariacao").value = dados.dataCriacao || "";
    }
}

