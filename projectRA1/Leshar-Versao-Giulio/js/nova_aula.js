document.getElementById("salvar").addEventListener("click", function(){
    armazenarAula();
    window.location.href = "index.html";
});

function armazenarAula(){
    var aulas = JSON.parse(localStorage.getItem("aulas")) || [];
    var obj = { titulo:"", descricao:"", data:"", horario:"" };
    obj.titulo = document.getElementById("titulo").value;
    obj.descricao = document.getElementById("descricao").value;
    obj.data = document.getElementById("data").value;
    obj.horario = document.getElementById("horario").value;
    aulas.push(obj);
    localStorage.setItem("aulas", JSON.stringify(aulas));
}