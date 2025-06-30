import mysql from 'mysql2/promise';
import fastify, { type FastifyReply, type FastifyRequest } from 'fastify';
import cors from '@fastify/cors';

const app = fastify();
app.register(cors);

app.get("/produtos", async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: 'root',
      password: "",
      database: 'atividadeFrameworks',
      port: 3306
    });

    const [dados] = await conn.query("SELECT * FROM produtos");
    reply.status(200).send(dados);

    await conn.end();

  } catch (erro: any) {
    if (erro.code === "ECONNREFUSED") {
      console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!");
      reply.status(400).send({ mensagem: "ERRO: LIGUE O LARAGÃO!!! CABEÇA!" });
    } else if (erro.code === "ER_BAD_DB_ERROR") {
      console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO");
      reply.status(400).send({ mensagem: "ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO" });
    } else if (erro.code === "ER_ACCESS_DENIED_ERROR") {
      console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO");
      reply.status(400).send({ mensagem: "ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO" });
    } else {
      console.log(erro);
      reply.status(400).send({ mensagem: "ERRO DESCONHECIDO OLHE O TERMINAL" });
    }
  }
});
