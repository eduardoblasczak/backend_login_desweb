document.addEventListener("DOMContentLoaded", () => {
    carregarPerfilParaEdicao();
});

document.getElementById("salvar").addEventListener("click", function(e){
    e.preventDefault();
    armazenarPerfil();
    window.location.href = "index.html";
});

function armazenarPerfil(){
    var perfil = JSON.parse(localStorage.getItem("perfil")) || [];
    var id = localStorage.getItem("perfilEditar");

    var obj = {nome:"", idade:"", biografia:""};
    obj.nome = document.getElementById("nome").value;
    obj.idade = document.getElementById("idade").value;
    obj.biografia = document.getElementById("biografia").value;
    obj.sexo = document.getElementById("sexo").value;

    
    if(id !== null){ // se tiver id, edita
        perfil[id] = obj;
        localStorage.removeItem("perfilEditar"); // limpa o índice
    } else { // senão, cria novo
        perfil.push(obj);
    }

    localStorage.setItem("perfil", JSON.stringify(perfil));
    
}

function carregarPerfilParaEdicao(){
    var id = localStorage.getItem("perfilEditar");

    if(id !== null){
        var perfil = JSON.parse(localStorage.getItem("perfil")) || [];
        var dados = perfil[id];

        document.getElementById("nome").value = dados.nome;
        document.getElementById("idade").value = dados.idade;
        document.getElementById("biografia").value = dados.biografia;
        document.getElementById("sexo").value = dados.sexo;
    }
}