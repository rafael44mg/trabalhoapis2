const express = require('express');
const cadastroLivros = require('../cadastro_retiradas');
const retiradaController = require('../controller/retirada_controller');

const router = express.Router();

//Recurso: Retiradas - rota: /retiradas
router.get('/', retiradaController.listar);
router.get('/:id', retiradaController.buscarPorId);
router.post('/', retiradaController.inserir);
router.put('/:id', retiradaController.atualizar);
router.delete('/:id', retiradaController.deletar);

module.exports = router;