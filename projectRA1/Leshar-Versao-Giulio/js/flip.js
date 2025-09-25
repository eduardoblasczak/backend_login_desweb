// Selecionando os elementos do DOM
const card = document.querySelector('.card'); // O card principal
const loginForm = document.getElementById('loginForm'); // Formulário de login
const registerForm = document.getElementById('registerForm'); // Formulário de registro
const flipToRegisterLink = document.getElementById('flipToRegister'); // Link para ir ao registro
const flipToLoginLink = document.getElementById('flipToLogin'); // Link para ir ao login

// --- CONTROLE DA ANIMAÇÃO DE VIRAR O CARD ---

// Quando clicar para registrar
flipToRegisterLink.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    card.classList.add('is-flipped'); // Adiciona a classe que vira o card
});

// Quando clicar para voltar ao login
flipToLoginLink.addEventListener('click', (event) => {
    event.preventDefault();
    card.classList.remove('is-flipped'); // Remove a classe, voltando ao login
});
