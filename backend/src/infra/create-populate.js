/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3  from "sqlite3";
import db from "./db.js";

sqlite3.verbose()

//==== Usuários
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64)
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (NOME, EMAIL, SENHA)
VALUES 
    ('Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******'),
    ('Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********'),
    ('Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********')
`

function criaTabelaUsr() {
    db.run(USUARIOS_SCHEMA, (error)=> {
       if (error) console.log(error);
    });
}


function populaTabelaUsr() {
    db.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) console.log(error);
    });
}

//==== Parceiros
const PARCEIROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PARCEIROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "URLLOGO" varchar(64),
    "DESCRICAO" varchar(300)
  );`;

const ADD_PARCEIROS_DATA = `
INSERT INTO PARCEIROS (NOME, URLLOGO, DESCRICAO)
VALUES 
    ('Prefeitura do Rio de Janeiro', 'https://drive.google.com/file/d/1-NRM6CaDzo4Mt2rSASEfjLhOW1Z6MGYg/view?usp=sharing', 'Instituição sede do poder executivo do município do Rio de Janeiro.'),
    ('Senac', 'https://drive.google.com/file/d/1-BL20HcOgWdbXGOshXluuXJtBvyc8wzF/view?usp=sharing', 'Desde 1946, o Serviço Nacional de Aprendizagem Comercial – Senac é o principal agente de educação profissional voltado para o Comércio de Bens, Serviços e Turismo do País.'),
    ('Resilia Educação', 'https://drive.google.com/file/d/1-ORMf-V4rQC5kQoeZHkcLySgwiL3JEb1/view?usp=sharing', 'A Resilia é uma empresa que impacta vidas através da educação enquanto formam profissionais para o setor que mais cresce no mundo: tecnologia. Unindo conhecimento, hábitos de excelência e diversidade, mais do que alunos, formam Resilientes.'),
    ('Petrobrás', 'https://drive.google.com/file/d/1-N9GqjsQ48A4_6T_fYSOfUFHP8QSH6pU/view?usp=sharing', 'A Petrobrás é uma empresa estatal brasileira que atua principalmente na exploração e produção de petróleo e seus derivados e de gás natural.'),
    ('Banco do Brasil', 'https://drive.google.com/file/d/1-F_amE2z2eSiS9wgB98LuY2wsT-tUbkB/view?usp=sharing', 'O Banco do Brasil é um banco brasileiro, constituído na forma de sociedade de economia mista, com participação do Governo Federal do Brasil em 50% das ações. É um dos cinco bancos estatais do governo brasileiro, tendo como acionistas, para além da União, capital estrangeiro, livre capital nacional e ações em tesouraria.'),
    ('Eletrobras', 'https://drive.google.com/file/d/1-IphyCQpMznZW3pHJ_ihaJR38xhDZqom/view?usp=sharing', 'A Eletrobras é uma empresa brasileira de capital aberto que atua como uma holding, dividida em geração e transmissão, criada em 1962 inicialmente como uma Estatal, para coordenar todas as empresas do setor elétrico.')
`

function criaTabelaParceiros() {
    db.run(PARCEIROS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de parceiros");
    });
}


function populaTabelaParceiros() {
    db.run(ADD_PARCEIROS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de parceiros");
    });
}

//==== ADMIN
const ADMIN_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ADMIN" (
"ID" INTEGER PRIMARY KEY AUTOINCREMENT,
"NOME" varchar(64),
"SOBRENOME" varchar(64),
"EMAIL" varchar(64),
"SENHA" varchar(64)
)`

const ADD_ADMIN_DATA = `
INSERT INTO ADMIN (NOME, SOBRENOME, EMAIL, SENHA)
VALUES
    ('Danilo', 'Santos', 'danilo@gmail.com', '************'),
    ('Rayssa', 'Cadilhe', 'rayssa@gmail.com', '***********')
`

function criaTabelaAdmin() {
    db.run(ADMIN_SCHEMA, (error) => {
        if (error) console.log ('Erro ao criar a tabela de Admin');
    });
};

function populaTabelaAdmin() {
    db.run(ADD_ADMIN_DATA, (error)=> {
        if (error) console.log(error);
     });
};

//==== CONTATO
const CONTATOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CONTATOS" (
"ID" INTEGER PRIMARY KEY AUTOINCREMENT,
"NOME" varchar(64),
"SOBRENOME" varchar(64),
"EMAIL" varchar(64),
"COMENTARIO" varchar(64),
"CONCEITO" varchar(64),
"DATA" varchar(64),
"HORA" varchar(64)
)`

const ADD_CONTATOS_DATA = `
INSERT INTO CONTATOS (NOME, SOBRENOME, EMAIL, COMENTARIO, CONCEITO, DATA, HORA)
VALUES
    ('Anderson', 'Vasco', 'caiujacaiu@gmail.com', 'TESTE DE COMENTARIO' , '5' , '17/04/2023', '21:05')
`

function criaTabelaContato() {
    db.run(CONTATOS_SCHEMA, (error) => {
        if (error) console.log ('Erro ao criar a tabela de CONTATOS');
    });
};

function populaTabelaContato() {
    db.run(ADD_CONTATOS_DATA, (error)=> {
        if (error) console.log(error);
     });
};

//==== IMAGENS
const IMAGENS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "IMAGENS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" varchar(64),
    "DESCRICAO" varchar(300),
    "URL" varchar(450)
  )`

const ADD_IMAGENS_DATA = `
INSERT INTO IMAGENS (TITULO, DESCRICAO, URL)
VALUES 
    ('Arteiros - Cidade de Deus', 'Formado por crianças e adolescentes com faixa etária entre 09 e 18 anos, na sua maioria moradores da Cidade de Deus.', 'https://scontent.fgig18-1.fna.fbcdn.net/v/t39.30808-6/326506739_1147356152643248_2154653146716669189_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGOgbioSV9BZ8-m9rkVvxs2OwjrSV4iJsw7COtJXiImzAhChlJEiyJjgoS61Y290MuZn_gexN5k21_vR2KoCRXS&_nc_ohc=Q17ulSv_LPwAX8lJ63L&_nc_ht=scontent.fgig18-1.fna&oh=00_AfA775U6wbdKm9ZVz-i61UFjWyzIsdXRRktylu82TJE18Q&oe=644389C9'),
    ('Brasil Esperança', 'Sustentabilidade, eficiência e baixo custo de obra, pra ajudar quem mais precisa.', 'https://scontent.fgig18-1.fna.fbcdn.net/v/t39.30808-6/307309696_425127473035239_1206793186502964153_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG6P7YBLISoCz4P6bwy1S-88C5RSDGszEjwLlFIMazMSIZdJsvUFYexeXVZLl0FWkAL83yBp66zJM-SMRKc19zH&_nc_ohc=OhNxvAFEbwIAX9lGEEA&_nc_ht=scontent.fgig18-1.fna&oh=00_AfDMcN_gT26anx-9CUxnJtZfxsFj7S839ROsHJid33V__Q&oe=6443679F'),
    ('Recomeçando','Recomeçando é uma instituição sem fins lucrativos que atua na formação de cidadãos desde a infância para mudar o mundo. Acreditamos com todas as nossas forças que se hoje investirmos nas crianças e empoderarmos mulheres garantiremos um amanhã brilhante para o nosso planeta.', 'https://recomecando.ong.br/wp-content/uploads/2022/03/LOGO-ONG-RECOMEC%CC%A7ANDO-4-e1653963140492-2048x993.png' )
`

function criaTabelaImagens() {
    db.run(IMAGENS_SCHEMA, (error)=> {
       if (error) console.log(error);
    });
}


function populaTabelaImagens() {
    db.run(ADD_IMAGENS_DATA, (error)=> {
       if (error) console.log(error);
    });
}



//==== NOTICIAS
const NOTICIAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "NOTICIAS" (
"ID" INTEGER PRIMARY KEY AUTOINCREMENT,
"GENERO" varchar(64),
"TITULO" varchar(64),
"SUBTITULO" varchar(64),
"ARTIGO" varchar(500),
"AUTOR" varchar(64),
"DATA" date,
"HORA" time
)`

const ADD_NOTICIAS_DATA = `
INSERT INTO NOTICIAS (GENERO, TITULO, SUBTITULO, ARTIGO, AUTOR, DATA, HORA)
VALUES ( 'Educação' , 'Ensino Médio' , 'Reforma', 'Lorem' , 'Kaio Melo', '19/04/2023', '00:00:00')
`

function criaTabelaNoticias() {
    db.run(NOTICIAS_SCHEMA, (error) => {
        if (error) console.log ('Erro ao criar a tabela de notícias');
    });
}

function populaTabelaNoticias() {
    db.run(ADD_NOTICIAS_DATA, (error) => {
        if (error) console.log ('Erro ao popular a tabela de notícias')
    });
}

db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
    criaTabelaParceiros();
    populaTabelaParceiros();
    criaTabelaNoticias();
    populaTabelaNoticias();
    criaTabelaAdmin();
    populaTabelaAdmin();
    criaTabelaContato();
    populaTabelaContato();
    criaTabelaImagens();
    populaTabelaImagens()
});