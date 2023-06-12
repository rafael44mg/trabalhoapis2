const cadastroClientes = require('../cadastro_clientes');

function listar(req, res) {
    const listaClientes = cadastroClientes.listar();
    res.json(listaClientes);
}

function buscarPorId(req,res) {
    const id = req.params.id;
    try{
        const cliente = cadastroClientes.buscarPorId(id);
        res.json(cliente);
    } catch (err) {
        res.status(err.numero).json(err);
    }
}

function inserir(req, res) {
    const cliente = req.body;

    try{
        const clienteInserido = cadastroClientes.inserir(cliente);
        res.status(201).json(clienteInserido);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
}

function atualizar(req,res) {
    const id = req.params.id;
    const cliente = req.body;
    try{
        const clienteAtualizado = cadastroClientes.atualizar(id,cliente);
        res.json(clienteAtualizado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }

}

function deletar(req,res) {
    const id = req.params.id;
    try{
        const clienteDeletado = cadastroClientes.deletar(id);
        res.json(clienteDeletado);
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