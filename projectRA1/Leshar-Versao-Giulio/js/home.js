document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("usuarioLogado")){
        var sessao = JSON.parse(localStorage.getItem("usuarioLogado"));
        var pagina = "Seja bem vindo " + sessao.email;
        document.getElementById("retorno").innerHTML = pagina;
    }else{
        window.location.href = "../index.html";
    }
});