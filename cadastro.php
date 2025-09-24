<?php

// Define que a resposta deste script será no formato JSON.
// Isso é crucial para que o JavaScript consiga entender a resposta corretamente.
header("Content-Type: application/json");


// Define o nome do arquivo que usaremos como nosso banco de dados.
$arquivoBD = 'users.json'; 

// Pega os dados enviados pelo JavaScript via POST.
// O '?? '' ' é um atalho para definir um valor padrão (string vazia) se o campo não for enviado.
$nome = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$senha = $_POST['password'] ?? '';

// Validação simples: verifica se algum dos campos está vazio.
if (empty($nome) || empty($email) || empty($senha)) {
    // Se algum campo estiver vazio, retorna uma mensagem de erro em JSON e para a execução do script.
    echo json_encode(['success' => false, 'message' => 'Preencha todos os campos.']);
    exit;
}


// Carrega os usuários existentes do arquivo JSON.
// Se o arquivo não existir, começa com um array vazio.
$usuarios = file_exists($arquivoBD) ? json_decode(file_get_contents($arquivoBD), true) : [];

// Percorre a lista de usuários já cadastrados.
foreach ($usuarios as $usuario) {
    
    // Verifica se o email que estamos tentando cadastrar já existe na lista.
    if ($usuario['email'] === $email) {
        // Se o email já existe, retorna uma mensagem de erro e para a execução.
        echo json_encode(['success' => false, 'message' => 'Email já cadastrado.']);
        exit;
    }
}

// Criptografa a senha. Isso é MUITO importante para a segurança.
// Nunca se deve salvar senhas como texto puro no banco de dados.
// A função password_hash cria um "hash" seguro da senha, que não pode ser revertido.
$senhaCriptografada = password_hash($senha, PASSWORD_DEFAULT);

// Cria um novo array (que representa o novo usuário) com os dados recebidos.
$novoUsuario = [
    'nome' => $nome,
    'email' => $email,
    'senha' => $senhaCriptografada // Salva a senha já criptografada.
];

// Adiciona o novo usuário ao final da lista de usuários.
$usuarios[] = $novoUsuario;
// Salva a lista atualizada de usuários de volta no arquivo users.json.
// JSON_PRETTY_PRINT formata o JSON para que ele fique legível se abrirmos o arquivo.
file_put_contents($arquivoBD, json_encode($usuarios, JSON_PRETTY_PRINT));

// Retorna uma mensagem de sucesso em JSON.
echo json_encode(['success' => true, 'message' => 'Cadastro realizado com sucesso!']);
?>