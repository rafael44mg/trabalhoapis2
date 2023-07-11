const cadastroAutor = require('../cadastro_autor');
const repositoryAutor = require('../repository/autor_repository.js');

async function listar(req, res) {
    const listaAutor = await repositoryAutor.listar();//cadastroAutor.listar();
    res.json(listaAutor);
}

async function buscarPorId(req,res) {
    const id = req.params.id;
    const autor = await repositoryAutor.buscarPorId(id);
    if (autor){
        res.json(autor);
    }
    else {
        res.status(404).json(
            {
                numero: 404,
                msg: "Erro: Autor não encontrado."
            }
        );
    }
}

async function inserir(req, res) {
    const autor = req.body;
    if(autor && autor.nome && autor.paisOrigem){
        const autorInserido = await repositoryAutor.inserir(autor);
        res.status(201).json(autorInserido);
    }
    else {
        res.status(400).json(
            {
                numero: 400,
                msg: "Erro: Os parametros de produto estão invalidos."
            }
        );
    }
}

async function atualizar(req,res) {
    const id = req.params.id;
    const autor = req.body;

    if(autor && autor.nome && autor.paisOrigem)
    {
        const autorAlterado = await repositoryAutor.atualizar(id, autor);
        if(autorAlterado){
            res.json(autorAlterado);
        }
        else {
            res.status(404).json(
                {
                    numero: 404,
                    msg: "Erro: autor não encontrado."
                }
            );
        }
    }
    else {
        res.status(400).json(
            {
                numero: 400,
                msg: "Erro: Os parametros de autor estao invalidos."    
            }
        );
    }
}

async function deletar(req,res) {
    const id = req.params.id;
    const autorDeletado = await repositoryAutor.deletar(id);
    if (autorDeletado){
        res.json(autorDeletado);
    }
    else {
        res.status(404).json(
            {
                numero: 404,
                msg: "Erro: autor não encontrado."
            }
        );
    }
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
}