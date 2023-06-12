const cadastroAutor = require('../cadastro_autor');

function listar(req, res) {
    const listaAutor = cadastroAutor.listar();
    res.json(listaAutor);
}

function buscarPorId(req,res) {
    const id = req.params.id;
    try{
        const autor = cadastroAutor.buscarPorId(id);
        res.json(autor);
    } catch (err) {
        res.status(err.numero).json(err);
    }
}

function inserir(req, res) {
    const autor = req.body;

    try{
        const autorInserido = cadastroAutor.inserir(autor);
        res.status(201).json(autorInserido);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}

function atualizar(req,res) {
    const id = req.params.id;
    const autor = req.body;
    try{
        const autorAtualizado = cadastroAutor.atualizar(id,autor);
        res.json(autorAtualizado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }

}

function deletar(req,res) {
    const id = req.params.id;
    try{
        const autorDeletado = cadastroAutor.deletar(id);
        res.json(autorDeletado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
}