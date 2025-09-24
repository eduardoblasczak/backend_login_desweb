<?php

// Define que a resposta será no formato JSON.
header('Content-Type: application/json');

// Define o nome do nosso arquivo de banco de dados.
$arquivoBD = 'users.json';

// Pega o email e a senha enviados pelo JavaScript.
$email = $_POST['email'] ?? '';
$senha = $_POST['password'] ?? '';

// Verifica se os campos de email e senha foram preenchidos.
if (empty($email) || empty($senha)) {
    // Se não foram, retorna um erro.
    echo json_encode(['success' => false, 'message' => 'Email e senha são obrigatórios.']);
    exit; // Para a execução do script.
}

// Verifica se o nosso "banco de dados" existe.
if (!file_exists($arquivoBD)) {
    // Se não existir, não há usuários cadastrados, então o login sempre falhará.
    // A mensagem é genérica ("Email ou senha inválidos") por segurança, para não informar a um possível
    // atacante se o email existe ou não.
    echo json_encode(['success' => false, 'message' => 'Email ou senha inválidos.']);
    exit;
}

// Carrega o conteúdo do arquivo JSON e o decodifica para um array PHP.
$usuarios = json_decode(file_get_contents($arquivoBD), true);
$achouUsuario = null; // Variável para guardar o usuário encontrado.

// Percorre a lista de todos os usuários cadastrados.
foreach ($usuarios as $usuario) {
    // Compara o email de cada usuário da lista com o email fornecido no login.
    if ($usuario['email'] === $email) {
        // Se encontrar um email correspondente, guarda os dados desse usuário...
        $achouUsuario = $usuario;
        // ...e quebra o loop, pois já encontramos quem procurávamos.
        break;
    }
}

// Após o loop, verificamos duas coisas:
// 1. Se um usuário com aquele email foi encontrado ($achouUsuario não é nulo).
// 2. Se a senha fornecida ($senha) corresponde à senha criptografada salva ($achouUsuario['senha']).
// A função password_verify faz essa verificação de forma segura.
if ($achouUsuario && password_verify($senha, $achouUsuario['senha'])) {
    // Se ambas as condições forem verdadeiras, o login é um sucesso!
    echo json_encode([
        'success' => true, 
        'message' => 'Login efetuado com sucesso!',
        // Retorna também o nome do usuário, que o JavaScript pode usar para personalizar a próxima página.
        'user' => ['name' => $achouUsuario['nome']] 
    ]);
} else {
    // Se o usuário não foi encontrado ou a senha está incorreta, retorna uma mensagem de erro genérica.
    echo json_encode(['success' => false, 'message' => 'Email ou senha inválidos.']);
}
?>