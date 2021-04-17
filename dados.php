<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php

    $nome = isset ($_GET["nome"]) ? $_GET["nome"] : "Insira seu nome.";
    $email = isset ($_GET["email"]) ? $_GET["email"] : "Digtie seu E-mail.";
    $password =  isset ($_GET["password"]) ? $_GET["password"] : "Digite uma senha.";

    ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "Olá $nome, poderia confirmar se o seu email é $email e a sua senha é $password";
    ?>
    
</body>
</html>