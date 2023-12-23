<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"> -->
  <link rel="stylesheet" href="style_formulario.css">
</head>
<body>
    <main>
        <form action="formulario.php" method="post" class="form-cadastro">
            <h2>Formulário Para Cadastro</h2> 
            <br> <br>
            <div class = "box-medio">
                <label>Nome</label> <br>
                <input type="text" class="input-nomeCadastro" name="input-nomeCadastro"> 
                <br> <br>
                <label>Telefone Residencial</label>
                <label class="label-celular">Celular</label> <br> 
                <input type="number" class="input-telefoneResidencial" name="input-telefoneResidencial">
                <input type="number" class="input-telefoneCelular" name="input-telefoneCelular"> 
                <br> <br>
                <p>Email</p>
                <input type="email" class="input-email" name="input-email"> 
                <br> <br>
                <label for="input-dataNascimento"> Data De Nascimento</label>
                <label for="select-genero" id="label-genero">Genêro</label><br>
                <input type="date" name="input-dataNascimento" id="input-dataNascimento">
                <select name="select-genero" class="select-genero" id="select-genero">
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>
                <br><br>
                <label for="input-cpf">CPF</label>
                <label for="input-rg" id="label-rg">RG</label> <br>
                <input type="text" name="input-cpf" id="input-cpf">
                <input type="text" name="input-rg" id="input-rg">
                <br> <br> 
                <label for="input-orgaoEmissor">Orgão Emissor</label> 
                <label for="input-uf" id="label-uf"></label>UF<br>
                <input type="text" name="input-orgaoEmissor" id="input-orgaoEmissor">
                <input type="text" name="input-uf" id="input-uf">
                <br><br>
                <label for="input-logadouro">Logadouro(Ex: Av., Rua, Praça)</label> <br>
                <input type="text" name="input-logadouro" id="input-logadouro">
                <br> <br>
                <label for="input-bairro">Bairro</label> <br>
                <input type="text" name="input-bairro" id="input-bairro">
                <br><br>
                <label for="input-complemento">Complemento</label>
                <label for="input-numeroResidencia" id="label-numero">Número</label><br>
                <input type="text" name="input-complemento" id="input-complemento">
                <input type="text" name="input-numeroResidencia" id="input-numeroResidencia"><br><br>
                <label for="input-estado">Estado</label>
                <label for="input-cidade" id="label-cidade">Cidade</label><br>
                <input type="text" id="input-estado">
                <input type="text" id="input-cidade">
                <br><br>
                <label for="input-cep">CEP</label><br>
                <input type="number" name="input-cep" id="input-cep">
                <br><br>
                <p>Usuário</p>
                <input type="text" class="input-usuarioCadastro" name="input-usuarioCadastro"> 
                <br> <br>
                <p>Senha</p>
                <input type="password" class="input-senhaCadastro" name="input-senhaCadastro"> 
                <br> <br>
                <p>Confirmar Senha</p>
                <input type="password" class="input-senhaConfirmar" name="input-senhaConfirmar"> 
                <br> <br> <br>
                <a href="index.html"> <button type="button" class="btn-cadastrar"> Cadastrar</button> </a>
            </div>
        </form>
    </main>
    <script src="script.js"></script>
</body>
</html>