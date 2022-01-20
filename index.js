const express = require('express');

const server = express();

server.use(express.json());

//Base de dados inicial:
let dados = [
    {
        "Nome": "Sir.Gustav Morgenstern",
        "Idade": "20",
        "Profissão": "JavaScript fullstack developer",
        "Altura": "1.71",
        "Peso": "70kg",
        "Cor_favorita": "Blue"
    }
];

//Método de requisição http GET - Pegar todos os dados:

server.get('/clientes', (req, res) => {
    return res.json(dados);
});


//Método de requisição http GET - Pegar dado por id:

server.get('/clientes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(dados[index]);
});


//Método de requisição http POST:

server.post('/clientes', (req, res) => {
    const { Nome, Idade, Profissão, Altura, Peso, Cor_favorita } = req.body
    dados.push({Nome, Idade, Profissão, Altura, Peso, Cor_favorita});

    return res.json(dados);
});


//Método de requisição http PUT:

server.put('/clientes/:index', (req, res) => {
    const { index } = req.params;
    const { Nome, Idade, Profissão, Altura, Peso, Cor_favorita} = req.body;

    dados[index] = ({Nome, Idade, Profissão, Altura, Peso, Cor_favorita});

    return res.json(dados);
});


//Método de requisição http PATCH:

server.patch('/clientes/:index', (req, res) => {
    const { index } = req.params;
    const { Nome, Idade, Profissão, Altura, Peso, Cor_favorita } = req.body;

    const Dados = dados[index];

    if (Nome) dados[index] = {...Dados, Nome};
    if (Idade) dados[index] = {...Dados, Idade};
    if (Profissão) dados[index] = {...Dados, Profissão};
    if (Altura) dados[index] = {...Dados, Altura};
    if (Peso) dados[index] = {...Dados, Peso};
    if (Cor_favorita) dados[index] = {...Dados, Cor_favorita};
});


//Método de requisição http DELETE:

server.delete('/clientes/:index', (req, res) => {
    const { index } = req.params;
    dados.splice(index, 1);
    return res.json({Message: "Os dados sobre a pessoa selecionada foram removidos com sucesso!"});
});


//Porta do servidor:
server.listen(3000, () => {
    console.log('O servidor está rodando!');
});
