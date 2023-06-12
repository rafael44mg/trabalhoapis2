const cadastroRetiradas = require('../cadastro_retiradas');

function listar(req, res) {
    const listaRetiradas = cadastroRetiradas.listar();
    res.json(listaRetiradas);
}

function buscarPorId(req,res) {
    const id = req.params.id;
    try{
        const retirada = cadastroRetiradas.buscarPorId(id);
        res.json(retirada);
    } catch (err) {
        res.status(err.numero).json(err);
    }
}

function inserir(req, res) {
    const retirada = req.body;

    try{
        const retiradaInserido = cadastroRetiradas.inserir(retirada);
        res.status(201).json(retiradaInserido);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}

function atualizar(req,res) {
    const id = req.params.id;
    const retirada = req.body;
    try{
        const retiradaAtualizado = cadastroRetiradas.atualizar(id,retirada);
        res.json(retiradaAtualizado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }

}

function deletar(req,res) {
    const id = req.params.id;
    try{
        const retiradaDeletado = cadastroRetiradas.deletar(id);
        res.json(retiradaDeletado);
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