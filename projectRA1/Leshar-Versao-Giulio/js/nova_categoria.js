document.getElementById("salvar").addEventListener("click", function(){
    salvarCategoria();
    window.location.href = "index.html";
});

function salvarCategoria() {
    var categorias = JSON.parse(localStorage.getItem("categorias")) || [];
    var obj = { nome: "", prioridade: "", dataCriacao: ""};
    obj.nome = document.getElementById("nome").value;
    obj.prioridade = document.getElementById("prioridade").value;
    obj.dataCriacao = document.getElementById("dataCriacao").value;
    categorias.push(obj);
    localStorage.setItem("categorias", JSON.stringify(categorias));
}