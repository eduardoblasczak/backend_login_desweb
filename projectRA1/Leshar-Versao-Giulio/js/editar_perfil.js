document.getElementById("salvar").addEventListener("click", function(){
    armazenarPerfil();
    window.location.href = "index.html";
});

function armazenarPerfil(){
    var perfil = JSON.parse(localStorage.getItem("perfil")) || [];
    var obj = {nome:"", idade:"", biografia:""};
    obj.nome = document.getElementById("nome").value;
    obj.idade = document.getElementById("idade").value;
    obj.biografia = document.getElementById("biografia").value;
    perfil.push(obj);
    localStorage.setItem("perfil", JSON.stringify(perfil));
}