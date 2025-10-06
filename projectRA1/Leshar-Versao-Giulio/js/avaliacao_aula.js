document.getElementById("salvar").addEventListener("click", function(){
    armazenarAvaliacao();
    window.location.href = "index.html";
})

function armazenarAvaliacao(){
    var avaliacoes = JSON.parse(localStorage.getItem("avaliacoes"));
    var obj = {avaliacao:"", comentario:"", mentor:""};
    obj.avaliacao = document.getElementById("avaliacao").value;
    obj.comentario = document.getElementById("comentario").value;
    obj.mentor = document.getElementById("mentor").value;
    avaliacoes.push(obj);
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
}