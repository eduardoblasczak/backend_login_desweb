// Seleciona (pega) os elementos importantes da página HTML para que possamos manipulá-los.
const card = document.querySelector('.card'); // O container que faz a animação de virar.
const loginForm = document.getElementById('loginForm'); // O formulário de login.
const registerForm = document.getElementById('registerForm'); // O formulário de cadastro.
const flipToRegisterLink = document.getElementById('flipToRegister'); // O link "Cadastre-se".
const flipToLoginLink = document.getElementById('flipToLogin'); // O link "Faça Login".

// --- CONTROLE DA ANIMAÇÃO DE VIRAR O CARD ---

// Adiciona um "ouvinte" de evento para o link "Cadastre-se".
// Quando o usuário clicar neste link...
flipToRegisterLink.addEventListener('click', (event) => {
    event.preventDefault(); // Impede que o link recarregue a página (comportamento padrão de um link com #).
    card.classList.add('is-flipped'); // Adiciona a classe CSS 'is-flipped' ao card, o que ativa a animação de virar.
});

// Adiciona um "ouvinte" de evento para o link "Faça Login".
// Quando o usuário clicar neste link...
flipToLoginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Impede que o link recarregue a página.
    card.classList.remove('is-flipped'); // Remove a classe 'is-flipped', fazendo o card voltar para a posição inicial (login).
});

// --- LÓGICA DE LOGIN COM FETCH PARA O PHP ---

// Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário de login.
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede que o formulário recarregue a página, pois vamos tratar os dados com JavaScript.

    // Pega os valores que o usuário digitou nos campos de email e senha.
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Cria um objeto FormData, que é uma forma fácil de enviar dados de formulário.
    const formData = new FormData();
    formData.append('email', email); // Adiciona o email ao pacote de dados.
    formData.append('password', password); // Adiciona a senha ao pacote de dados.

    try {
        // Usa a API 'fetch' para fazer uma requisição para o nosso arquivo PHP.
        // É como se o JavaScript estivesse "ligando" para o 'login.php' no servidor.
        const response = await fetch('login.php', {
            method: 'POST', // Estamos enviando dados, então usamos o método POST.
            body: formData  // O corpo da requisição são os dados que acabamos de montar.
        });

        // Espera a resposta do servidor e a converte de texto JSON para um objeto JavaScript.
        const result = await response.json();

        // Verifica se a resposta do PHP indica que o login foi um sucesso.
        if (result.success) {
            // Se o login foi bem-sucedido, salva os dados do usuário no localStorage do navegador.
            // O localStorage guarda informações que persistem mesmo se o usuário fechar a aba.
            localStorage.setItem("usuarioLogado", JSON.stringify(result.user));

            // Redireciona o usuário para a página do painel (dashboard).
            window.location.href = "../dashboard-login/dashboard.html";
        } else {
            // Se o PHP retornou que o login falhou, mostra a mensagem de erro que o servidor enviou.
            alert(result.message);
        }

    } catch (error) {
        // Se houver qualquer erro na comunicação com o servidor (ex: servidor offline), mostra um alerta genérico.
        console.error('Erro ao tentar fazer login:', error);
        alert('Ocorreu um erro de comunicação com o servidor.');
    }
});

// --- LÓGICA DE CADASTRO COM FETCH PARA O PHP ---

// Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário de cadastro.
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o recarregamento da página.

    // Pega os valores dos campos de nome, email e senha do formulário de cadastro.
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Monta o pacote de dados para enviar ao servidor.
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    try {
        // "Liga" para o 'cadastro.php' no servidor, enviando os dados do novo usuário.
        const response = await fetch('cadastro.php', {
            method: 'POST',
            body: formData
        });
        
        // Converte a resposta JSON do servidor em um objeto JavaScript.
        const result = await response.json();

        // Mostra a mensagem de resposta do servidor (ex: "Cadastro realizado com sucesso!").
        alert(result.message);

        // Se o cadastro foi bem-sucedido...
        if (result.success) {
            registerForm.reset(); // Limpa os campos do formulário de cadastro.
            card.classList.remove('is-flipped'); // Vira o card de volta para a tela de login.
        }

    } catch (error) {
        // Se houver um erro de comunicação, exibe um alerta.
        console.error('Erro ao tentar cadastrar:', error);
        alert('Ocorreu um erro de comunicação com o servidor.');
    }
});