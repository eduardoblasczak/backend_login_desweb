document.addEventListener("DOMContentLoaded", () =>{
    if(!validaSessao()){
        window.location.href="../index.html";
    } else{
        carregarPerfil();
    }
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href="editar_perfil.html";
});

function validaSessao(){
    if(localStorage.getItem("usuarioLogado")){
        return true;
    }else{
        return false;
    }
}

function carregarPerfil(){
    if(localStorage.getItem("perfil")){
        var lista = JSON.parse(localStorage.getItem("perfil"));
        var html="";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td>Nome</td>";
        html += "<td>Idade</td>";
        html += "<td>Biografia</td>";
        html += "</tr>";

        for(var i=0; i<lista.length; i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].nome+"</td>";
            html += "<td>"+lista[i].idade+"</td>";
            html += "<td>"+lista[i].biografia+"</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }else{
        var obj = {nome: "teste", idade: "teste", biografia: "teste"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("perfil", JSON.stringify(lista));
        window.location.reload();
    }
}
function excluir(id){
    var perfil = JSON.parse(localStorage.getItem("perfil"));
    perfil.splice(id, 1);
    localStorage.setItem("perfil", JSON.stringify(perfil));
    window.location.reload();
}