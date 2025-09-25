document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        window.location.href = "../index.html";
    }else{
        carregarHabilidades();
    }
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "nova_habilidade.html";
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
        html += "<td>Categoria</td>";
        html += "<td>Nível</td>";
        html += "</tr>";

        for(var i=0; i<lista.length; i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].habilidade+"</td>";
            html += "<td>"+lista[i].categoria+"</td>";
            html += "<td>"+lista[i].nivel+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }else{
        var obj = {habilidade: "teste", categoria: "teste", nivel: "teste"};
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