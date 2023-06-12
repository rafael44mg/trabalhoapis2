const cadastroLivros = require('../cadastro_livros');

function listar(req, res) {
    const listaLivros = cadastroLivros.listar();
    res.json(listaLivros);
}

function buscarPorId(req,res) {
    const id = req.params.id;
    try{
        const livro = cadastroLivros.buscarPorId(id);
        res.json(livro);
    } catch (err) {
        res.status(err.numero).json(err);
    }
}

function inserir(req, res) {
    const livro = req.body;

    try{
        const livroInserido = cadastroLivros.inserir(livro);
        res.status(201).json(livroInserido);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}

function atualizar(req,res) {
    const id = req.params.id;
    const livro = req.body;
    try{
        const livroAtualizado = cadastroLivros.atualizar(id,livro);
        res.json(livroAtualizado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }

}

function deletar(req,res) {
    const id = req.params.id;
    try{
        const livroDeletado = cadastroLivros.deletar(id);
        res.json(livroDeletado);
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