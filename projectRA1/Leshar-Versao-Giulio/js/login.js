// --- EVENTOS ---
// Botão login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});

// --- FUNÇÃO LOGIN ---
async function login() {
    var email = document.getElementById("loginEmail").value;
    var senha = document.getElementById("loginPassword").value;

    const fd = new FormData();
    fd.append("email", email);
    fd.append("senha", senha);

        const retorno = await fetch("php/login.php", {
            method: "POST",
            body: fd
        });
        const resposta = await retorno.json();

        // repositorio localstorage
        localStorage.setItem("usuarioLogado", JSON.stringify(resposta));

        //deu certo
        window.location.href = "home/index.html";
        
}

