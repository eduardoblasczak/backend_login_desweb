// Quando o botão com id "salvar" for clicado
document.getElementById("salvar").addEventListener("click", function(){
    armazenarHabilidade(); // Chama a função para salvar a habilidade
    window.location.href = "index.html"; // Redireciona para a página principal
});

// Função responsável por armazenar a habilidade no localStorage
function armazenarHabilidade(){
    // Recupera a lista de habilidades já salvas no localStorage
    var habilidades = JSON.parse(localStorage.getItem("habilidades"));

    // Cria um objeto vazio de habilidade
    var obj = {habilidade:"", categoria:"", nivel:""};

    // Preenche o objeto com os valores dos inputs
    obj.habilidade = document.getElementById("habilidade").value;
    obj.categoria = document.getElementById("categoria").value;
    obj.nivel = document.getElementById("nivel").value;

    // Adiciona o objeto na lista de habilidades
    habilidades.push(obj);

    // Atualiza o localStorage com a nova lista
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
}
