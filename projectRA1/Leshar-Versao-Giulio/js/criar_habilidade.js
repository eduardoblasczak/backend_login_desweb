document.getElementById("salvar").addEventListener("click", function(){
    salvarHabilidade();
    window.location.href = "index.html";
});

function salvarHabilidade() {
    var habilidades = JSON.parse(localStorage.getItem("habilidades")) || [];
    var obj = { habilidade: "", descricao: "", nivel: "", cursos: 0 };

    obj.habilidade = document.getElementById("habilidade").value;
    obj.descricao = document.getElementById("descricao").value;
    obj.nivel = document.getElementById("nivel").value;
    obj.cursos = document.getElementById("cursos").value;

    habilidades.push(obj);
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
}