document.addEventListener("DOMContentLoaded", function(){
    carregarAulaParaEdicao();
});

document.getElementById("salvar").addEventListener("click", function(){
    armazenarAula();
    window.location.href = "index.html";
});

function armazenarAula(){
    var aulas = JSON.parse(localStorage.getItem("aulas")) || [];
    var id = localStorage.getItem("aulaEditar");

    var obj = { 
        titulo: document.getElementById("titulo").value,
        descricao: document.getElementById("descricao").value,
        data: document.getElementById("data").value,
        horario: document.getElementById("horario").value,
        formato: document.querySelector('input[name="formato"]:checked').value
    };
  if (id !== null){ // editar aula existente
        aulas[id] = obj;
        localStorage.removeItem("aulaEditar");
    } else { // criar nova aula
        aulas.push(obj);
    }  
    localStorage.setItem("aulas", JSON.stringify(aulas));
}

function carregarAulaParaEdicao(){
    var id = localStorage.getItem("aulaEditar");
    if(id !== null){
        var aulas = JSON.parse(localStorage.getItem("aulas")) || [];
        var dados = aulas[id];
        
        document.getElementById("titulo").value = dados.titulo || "";
        document.getElementById("descricao").value = dados.descricao || "";
        document.getElementById("data").value = dados.data || "";
        document.getElementById("horario").value = dados.horario || "";
    }
}