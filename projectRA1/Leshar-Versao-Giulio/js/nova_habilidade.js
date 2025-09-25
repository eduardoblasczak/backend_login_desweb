document.getElementById("salvar").addEventListener("click", function(){
    armazenarHabilidade();
    window.location.href = "index.html";
});

function armazenarHabilidade(){
    var habilidades = JSON.parse(localStorage.getItem("habilidades"));
    var obj = {habilidade:"", categoria:"", nivel:""};
    obj.habilidade = document.getElementById("habilidade").value;
    obj.categoria = document.getElementById("categoria").value;
    obj.nivel = document.getElementById("nivel").value;
    habilidades.push(obj);
    localStorage.setItem("habilidades", JSON.stringify(habilidades));
}