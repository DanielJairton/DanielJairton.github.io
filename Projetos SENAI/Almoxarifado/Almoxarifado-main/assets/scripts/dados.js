const categorias = [
    {
        "idCategoria" : 1,
        "descricao" : "Gestão",
    },
    {
        "idCategoria" : 2,
        "descricao" : "Cliente",
    },
    {
        "idCategoria" : 3,
        "descricao" : "RP",
    }
]

const motivos = [
    {
        "idMotivo" : 1,
        "descricao" : "Planejamento",
        "idCategoria" : 1
    },
    {
        "idMotivo" : 2,
        "descricao" : "Financeiro",
        "idCategoria" : 1
    },
    {
        "idMotivo" : 3,
        "descricao" : "Quebra de máquinas",
        "idCategoria" : 2
    }
]

/*const produtos = [
    {
        "idProduto" : 1,
        "descricao" : "Cadeira",
        "estoque" : 10,
        "estoqueMinimo" : 5
    },
    {
        "idProduto" : 2,
        "descricao" : "Banco",
        "estoque" : 20,
        "estoqueMinimo" : 10
    },
    {
        "idProduto" : 3,
        "descricao" : "Vaso",
        "estoque" : 30,
        "estoqueMinimo" : 35
    },
]*/

const produtos=[
    {
        "idProduto": 1,
        "Descricao": "Papel A4",
        "Estoque": 10,
        "EstoqueMinimo": 5,
        "Unidade": "Un",
        "Preco": 10.00
    },
    {
        "idProduto": 2,
        "Descricao": "Mel doce",
        "Estoque": 5,
        "EstoqueMinimo": 5,
        "Unidade": "Un",
        "Preco": 12.00
    },
    {
        "idProduto": 3,
        "Descricao": "Cadeira",
        "Estoque": 6,
        "EstoqueMinimo": 3,
        "Unidade": "Un",
        "Preco": 40.00
    },
]

const departamentos = [
    {
        "idDep": 1,
        "descricao": "Sec. do Trabalho",
        "responsavel": "João"
    },
    {
        "idDep": 2,
        "descricao": "Sec. da Educação",
        "responsavel": "Maria"
    },
    {
        "idDep": 3,
        "descricao": "Nat",
        "responsavel": "José"
    },
]

const funcionarios = [
    {
        "idFuncionario": 1,
        "nome": "João Vargas",
        "cargo": "diretor"
    },
    {
        "idFuncionario": 2,
        "nome": "Maria Souza",
        "cargo": "gerente"
    },
    {
        "idFuncionario": 3,
        "nome": "André Santos",
        "cargo": "zelador"
    }
]