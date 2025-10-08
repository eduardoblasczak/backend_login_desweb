document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = "../index.html";
    }else{
        
        carregarHabilidades();
    }
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "criar_habilidade.html";
});

function validaSessao(){
    if(localStorage.getItem("usuarioLogado")){
        return true;
    }else{
        return false;
    }
}

function carregarHabilidades(){
    if(localStorage.getItem("habilidades")){
        var lista = JSON.parse(localStorage.getItem("habilidades"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td>Habilidade</td>";
        html += "<td>Descrição</td>";
        html += "<td>Nível</td>";
        html += "<td>Quantidade de Cursos</td>"
        html += "</tr>";

        for(var i=0; i<lista.length; i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].habilidade+"</td>";
            html += "<td>"+lista[i].descricao+"</td>";
            html += "<td>"+lista[i].nivel+"</td>";
            html += "<td>"+lista[i].cursos+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }else{
        var obj = {habilidade: "habilidade", descricao: "descricao", nivel: "nivel", cursos: 0};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("habilidades", JSON.stringify(lista));
        window.location.reload();
    }
}
function excluir(id){
    var habilidades = JSON.parse(localStorage.getItem("habilidades"));
    habilidades.splice(id, 1);
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
    window.location.reload();
}