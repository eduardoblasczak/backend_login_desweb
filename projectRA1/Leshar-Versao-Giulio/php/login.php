<?php
    // Define que a resposta será no formato JSON e com charset UTF-8
    header('Content-Type: application/json;charset:utf-8');

    // Retorna os dados enviados via POST em formato JSON
    echo json_encode($_POST);
?>
