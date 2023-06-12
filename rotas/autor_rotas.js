const express = require('express');
const cadastroAutor = require('../cadastro_autor');
const autorController = require('../controller/autor_controller');

const router = express.Router();

//Recurso: Autor - rota: /autor
router.get('/', autorController.listar);
router.get('/:id', autorController.buscarPorId);
router.post('/', autorController.inserir);
router.put('/:id', autorController.atualizar);
router.delete('/:id', autorController.deletar);

module.exports = router;