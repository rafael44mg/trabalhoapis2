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
    const res = await cliente.query('SELECT * FROM livro')
    const listaLivro = res.rows;
    await cliente.end();
    return listaLivro;
}

async function buscarPorId(id) {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM livro WHERE id=$1',[id]);
    const livro = res.rows[0];
    await cliente.end();
    return livro;
}

async function inserir(livro) {
    const sql = 'INSERT INTO livro(nome, isbn, idAutor, editora, anoPublicacao) VALUES ($1,$2,$3,$4,$5) RETURNING *'
    const values = [livro.nome, livro.isbn, livro.idAutor, livro.editora, livro.anoPublicacao];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const livroInserido = res.rows[0];
    await cliente.end();
    return livroInserido;    
}

async function atualizar(id, livro) {
    const sql = 'UPDATE livro set nome=$1, isbn=$2, idautor=$3, editora=$4, anopublicacao=$5 WHERE id=$6 RETURNING *'
    const values = [livro.nome, livro.isbn, livro.idautor, livro.editora, livro.anopublicacao, id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const livroAtualizado = res.rows[0];
    await cliente.end();
    return livroAtualizado;    
}

async function deletar(id) {
    const sql = 'DELETE FROM livro WHERE id=$1 RETURNING *'
    const values = [id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const livroDeletado = res.rows[0];
    await cliente.end();
    return livroDeletado;    
}



module.exports = { 
    listar,
    buscarPorId, 
    inserir,
    atualizar,
    deletar
}