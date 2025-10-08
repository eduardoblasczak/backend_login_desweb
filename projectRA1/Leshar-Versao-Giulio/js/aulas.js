document.addEventListener("DOMContentLoaded", function() {
    if(!validaSessao()){
        window.location.href="../index.html";
    } else{
        carregarAulas();
        avaliarAulas();
    }
});

document.getElementById("nova").addEventListener("click", function(){
    window.location.href="nova_aula.html";
});

document.getElementById("avaliacao").addEventListener("click", function(){
    window.location.href="avaliacao_aula.html"
});

function validaSessao(){
    if(localStorage.getItem("usuarioLogado")){
        return true;
    }else{
        return false;
    }
}

function carregarAulas(){
    if(localStorage.getItem("aulas")){
        var lista = JSON.parse(localStorage.getItem("aulas"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td>Título</td>";
        html += "<td>Descrição</td>";
        html += "<td>Data</td>";
        html += "<td>Horário</td>";
        html += "<td>Formato</td>";
        html += "</tr>";

        for(var i=0; i<lista.length; i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].titulo+"</td>";
            html += "<td>"+lista[i].descricao+"</td>";
            html += "<td>"+lista[i].data+"</td>";
            html += "<td>"+lista[i].horario+"</td>";
            html += "<td>"+lista[i].formato+"</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }else{
        var obj = {titulo: "teste", descricao: "teste", data: "teste", horario: "teste", formato: "formato"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("aulas", JSON.stringify(lista));
        window.location.reload();
    }
}

function avaliarAulas(){
    if(localStorage.getItem("avaliacoes")){
        var lista2 = JSON.parse(localStorage.getItem("avaliacoes"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>Excluir</td>";
        html += "<td>Editar</td>";
        html += "<td>Avaliação</td>";
        html += "<td>Comentário</td>";
        html += "<td>Formato</td>";
        html += "<td>Mentor</td>";
        html += "</tr>";

        for(var i=0; i<lista2.length; i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir2("+i+")'>Excluir</a></td>";
            html += "<td><a href='javascript:editar2("+i+")'>Editar</a></td>";
            html += "<td>"+lista2[i].avaliacao+"</td>";
            html += "<td>"+lista2[i].comentario+"</td>";
            html += "<td>"+lista2[i].formato+"</td>";
            html += "<td>"+lista2[i].mentor+"</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("lista2").innerHTML = html;
    }else{
        var obj = {avaliacao: "teste", comentario: "teste", mentor: "teste"};
        var lista2 = [];
        lista2.push(obj);
        localStorage.setItem("avaliacoes", JSON.stringify(lista2));
        window.location.reload();
    }
}
function excluir(id){
    var aulas = JSON.parse(localStorage.getItem("aulas"));
    aulas.splice(id, 1);
    localStorage.setItem("aulas", JSON.stringify(aulas));
    window.location.reload();
}
function excluir2(id){
    var avaliacoes = JSON.parse(localStorage.getItem("avaliacoes"));
    avaliacoes.splice(id, 1);
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
    window.location.reload();
}


function editar2(id){
      localStorage.setItem("avaliacaoEditar", id);
      window.location.href = "avaliacao_aula.html";
}