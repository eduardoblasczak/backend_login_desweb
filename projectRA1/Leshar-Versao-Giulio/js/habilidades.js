// Executa quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    // Se não houver sessão, volta para a tela inicial
    if(!validaSessao()){
        window.location.href = "../index.html";
    }else{
        // Caso haja sessão, carrega as habilidades
        carregarHabilidades();
    }
});

// Quando clicar no botão "novo", vai para a tela de nova habilidade
document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "nova_habilidade.html";
});

// Função para validar se existe sessão
function validaSessao(){
    if(localStorage.getItem("usuarioLogado")){
        return true;
    }else{
        return false;
    }
}

// Função para carregar habilidades salvas no localStorage
function carregarHabilidades(){
    if(localStorage.getItem("habilidades")){
        // Recupera a lista
        var lista = JSON.parse(localStorage.getItem("habilidades"));
        var html = "";

        // Monta a tabela de exibição
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td>Habilidade</td>";
        html += "<td>Categoria</td>";
        html += "<td>Nível</td>";
        html += "</tr>";

        // Loop para listar todas as habilidades
        for(var i=0; i<lista.length; i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td>"+lista[i].habilidade+"</td>";
            html += "<td>"+lista[i].categoria+"</td>";
            html += "<td>"+lista[i].nivel+"</td>";
            html += "</tr>";
        }

        html += "</table>";

        // Insere a tabela no elemento com id "lista"
        document.getElementById("lista").innerHTML = html;
    }else{
        // Se não houver habilidades, cria um exemplo inicial
        var obj = {habilidade: "teste", categoria: "teste", nivel: "teste"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("habilidades", JSON.stringify(lista));
        window.location.reload();
    }
}

// Função para excluir habilidade
function excluir(id){
    var habilidades = JSON.parse(localStorage.getItem("habilidades"));
    habilidades.splice(id, 1); // Remove pelo índice
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
    window.location.reload(); // Recarrega a página
}
