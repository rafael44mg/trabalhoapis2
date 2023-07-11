const { Client } = require('pg')
const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'si3o3aro',
    database: 'crud_biblioteca',
};


async function listar() {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM cliente')
    const listaCliente = res.rows;
    await cliente.end();
    return listaCliente;
}

async function buscarPorId(id) {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM cliente WHERE id=$1',[id]);
    const clientes = res.rows[0];
    await cliente.end();
    return clientes;
}

async function inserir(clientes) {
    const sql = 'INSERT INTO cliente(matricula, nome, telefone) VALUES ($1,$2,$3) RETURNING *'
    const values = [clientes.matricula, clientes.nome, clientes.telefone];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const clienteInserido = res.rows[0];
    await cliente.end();
    return clienteInserido;    
}

async function atualizar(id, clientes) {
    const sql = 'UPDATE cliente set matricula=$1, nome=$2, telefone=$3 WHERE id=$4 RETURNING *'
    const values = [clientes.matricula, clientes.nome, clientes.telefone, id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const clienteAtualizado = res.rows[0];
    await cliente.end();
    return clienteAtualizado;    
}

async function deletar(id) {
    const sql = 'DELETE FROM cliente WHERE id=$1 RETURNING *'
    const values = [id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const clienteDeletado = res.rows[0];
    await cliente.end();
    return clienteDeletado;    
}



module.exports = { 
    listar,
    buscarPorId, 
    inserir,
    atualizar,
    deletar
}