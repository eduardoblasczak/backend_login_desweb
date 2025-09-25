// Executa o código quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    // Verifica se existe um usuário logado no localStorage
    if(localStorage.getItem("usuarioLogado")){
        // Recupera a sessão salva
        var sessao = JSON.parse(localStorage.getItem("usuarioLogado"));

        // Monta a mensagem de boas-vindas
        var pagina = "Seja bem vindo " + sessao.email;

        // Exibe a mensagem no elemento com id "retorno"
        document.getElementById("retorno").innerHTML = pagina;
    }else{
        // Se não existir sessão, redireciona para a página inicial
        window.location.href = "../index.html";
    }
});
