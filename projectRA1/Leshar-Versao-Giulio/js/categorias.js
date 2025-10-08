document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = "../index.html";
    }else{
        carregarCategorias();
    }
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "nova_categoria.html";
});

function validaSessao(){
    if(localStorage.getItem("usuarioLogado")){
        return true;
    }else{
        return false;
    }
}

function carregarCategorias(){
    if(localStorage.getItem("categorias")){
        var lista = JSON.parse(localStorage.getItem("categorias"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td>Nome da Categoria</td>";
        html += "<td>Prioridade</td>";
        html += "<td>Data de Criação</td>";
        html += "</tr>";

        for(var i=0; i<lista.length; i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].nome+"</td>";
            html += "<td>"+lista[i].prioridade+"</td>";
            html += "<td>"+lista[i].dataCriacao+"</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("lista").innerHTML = html;
        }else{
            var obj = {nome: "categoria", prioridade:"3", dataCriacao: "2025-09-10"};
            var lista = [];
            lista.push(obj);
            localStorage.setItem("categorias", JSON.stringify(lista));
            window.location.reload();
        }
}
function excluir(id){
    var categorias = JSON.parse(localStorage.getItem("categorias"));
    categorias.splice(id, 1);
    localStorage.setItem("categorias", JSON.stringify(categorias));
    window.location.reload();
}
/*
function editar(id){
    var categorias = JSON.parse(localStorage.getItem("categorias"));
    categorias.splice(id, 1);
    localStorage.setItem("categorias", JSON.stringify(categorias));
    window.location.href = "nova_categoria.html";
    window.location.reload();
}
*/