// --- EVENTOS ---
// Quando o formulário de login for enviado
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão (recarregar a página)
    login(); // Chama a função login
});

// --- FUNÇÃO LOGIN ---
async function login() {
    // Pega os valores dos campos de email e senha
    var email = document.getElementById("loginEmail").value;
    var senha = document.getElementById("loginPassword").value;

    // Cria um objeto FormData para enviar os dados
    const fd = new FormData();
    fd.append("email", email);
    fd.append("senha", senha);

    // Faz a requisição ao servidor
    const retorno = await fetch("php/login.php", {
        method: "POST",
        body: fd
    });

    // Converte a resposta para JSON
    const resposta = await retorno.json();

    // Salva o usuário no localStorage
    localStorage.setItem("usuarioLogado", JSON.stringify(resposta));

    // Redireciona para a home
    window.location.href = "home/index.html";
}
