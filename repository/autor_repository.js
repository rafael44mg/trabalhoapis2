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
    const res = await cliente.query('SELECT * FROM autor')
    const listaAutor = res.rows;
    await cliente.end();
    return listaAutor;
}

async function buscarPorId(id) {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM autor WHERE id_autor=$1',[id]);
    const autor = res.rows[0];
    await cliente.end();
    return autor;
}

async function inserir(autor) {
    const sql = 'INSERT INTO autor(nome, paisOrigem) VALUES ($1,$2) RETURNING *'
    const values = [autor.nome, autor.paisOrigem];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const autorInserido = res.rows[0];
    await cliente.end();
    return autorInserido;    
}

async function atualizar(id, autor) {
    const sql = 'UPDATE autor set nome=$1, paisorigem=$2 WHERE id_autor=$3 RETURNING *'
    const values = [autor.nome, autor.paisOrigem, id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const autorAtualizado = res.rows[0];
    await cliente.end();
    return autorAtualizado;    
}

async function deletar(id) {
    const sql = 'DELETE FROM autor WHERE id_autor=$1 RETURNING *'
    const values = [id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const autorDeletado = res.rows[0];
    await cliente.end();
    return autorDeletado;    
}



module.exports = { 
    listar,
    buscarPorId, 
    inserir,
    atualizar,
    deletar
}