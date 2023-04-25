/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from "sqlite3";
import db from "./db.js";

sqlite3.verbose();

//==== Usuários
const USUARIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Usuario" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "username" varchar(64),
    "email" varchar(64),
    "password" varchar(64)
  );`;

const ADD_USUARIO_DATA = `
INSERT INTO Usuario (username, email, password)
VALUES 
    ('Teste', 'teste@teste', '1234');
`;

function criaTabelaUsr() {
  db.run(USUARIO_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}

function populaTabelaUsr() {
  db.run(ADD_USUARIO_DATA, (error) => {
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
`;

function criaTabelaParceiros() {
  db.run(PARCEIROS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de parceiros");
  });
}

function populaTabelaParceiros() {
  db.run(ADD_PARCEIROS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de parceiros");
  });
}

//==== ADMIN
const ADMIN_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Admin" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "username" varchar(64),
    "email" varchar(64),
    "password" varchar(64)
  );`;

const ADD_ADMIN_DATA = `
INSERT INTO Admin (username, email, password)
VALUES 
    ('Admin', 'teste@teste', 'admin');
`;

function criaTabelaAdmin() {
  db.run(ADMIN_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar a tabela de Admin");
  });
}

function populaTabelaAdmin() {
  db.run(ADD_ADMIN_DATA, (error) => {
    if (error) console.log(error);
  });
}

//==== CONTATO
const CONTATOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CONTATOS" (
"ID" INTEGER PRIMARY KEY AUTOINCREMENT,
"NOME" varchar(64),
"SOBRENOME" varchar(64),
"EMAIL" varchar(64),
"COMENTARIO" varchar(64)
)`;

const ADD_CONTATOS_DATA = `
INSERT INTO CONTATOS (NOME, SOBRENOME, EMAIL, COMENTARIO)
VALUES
    ('Anderson', 'Vasco', 'caiujacaiu@gmail.com', 'TESTE DE COMENTARIO')
`;

function criaTabelaContato() {
  db.run(CONTATOS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar a tabela de CONTATOS");
  });
}

function populaTabelaContato() {
  db.run(ADD_CONTATOS_DATA, (error) => {
    if (error) console.log(error);
  });
}

//==== IMAGENS
const IMAGENS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "IMAGENS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" varchar(64),
    "DESCRICAO" varchar(300),
    "URL" varchar(450)
  )`;

const ADD_IMAGENS_DATA = `
INSERT INTO IMAGENS (TITULO, DESCRICAO, URL)
VALUES 
    ('Arteiros - Cidade de Deus', 'Formado por crianças e adolescentes com faixa etária entre 09 e 18 anos, na sua maioria moradores da Cidade de Deus.', 'https://scontent.fgig18-1.fna.fbcdn.net/v/t39.30808-6/326506739_1147356152643248_2154653146716669189_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGOgbioSV9BZ8-m9rkVvxs2OwjrSV4iJsw7COtJXiImzAhChlJEiyJjgoS61Y290MuZn_gexN5k21_vR2KoCRXS&_nc_ohc=Q17ulSv_LPwAX8lJ63L&_nc_ht=scontent.fgig18-1.fna&oh=00_AfA775U6wbdKm9ZVz-i61UFjWyzIsdXRRktylu82TJE18Q&oe=644389C9'),
    ('Brasil Esperança', 'Sustentabilidade, eficiência e baixo custo de obra, pra ajudar quem mais precisa.', 'https://scontent.fgig18-1.fna.fbcdn.net/v/t39.30808-6/307309696_425127473035239_1206793186502964153_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG6P7YBLISoCz4P6bwy1S-88C5RSDGszEjwLlFIMazMSIZdJsvUFYexeXVZLl0FWkAL83yBp66zJM-SMRKc19zH&_nc_ohc=OhNxvAFEbwIAX9lGEEA&_nc_ht=scontent.fgig18-1.fna&oh=00_AfDMcN_gT26anx-9CUxnJtZfxsFj7S839ROsHJid33V__Q&oe=6443679F'),
    ('Recomeçando','Recomeçando é uma instituição sem fins lucrativos que atua na formação de cidadãos desde a infância para mudar o mundo. Acreditamos com todas as nossas forças que se hoje investirmos nas crianças e empoderarmos mulheres garantiremos um amanhã brilhante para o nosso planeta.', 'https://recomecando.ong.br/wp-content/uploads/2022/03/LOGO-ONG-RECOMEC%CC%A7ANDO-4-e1653963140492-2048x993.png' )
`;

function criaTabelaImagens() {
  db.run(IMAGENS_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}

function populaTabelaImagens() {
  db.run(ADD_IMAGENS_DATA, (error) => {
    if (error) console.log(error);
  });
}

//==== NOTICIAS
const NOTICIAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "NOTICIAS" (
"ID" INTEGER PRIMARY KEY AUTOINCREMENT,
"genero" varchar(64),
"titulo" varchar(64),
"artigo" varchar(500),
"autor" varchar(64),
"data" date,
"urlImg" varchar(100),
"urlLink" varchar(100)
)`;

const ADD_NOTICIAS_DATA = `
INSERT INTO NOTICIAS (genero, titulo, artigo, autor, data, urlImg, urlLink)
VALUES 
    ( 'Educação' , 'Escola de Fotografia Popular na Maré está com inscrições abertas' , 'As inscrições vão até o dia 9 de abril e as vagas são direcionadas a pessoas de origem e/ou moradores de favelas', 'Voz da Comunidade' , '30/03/2023', 'https://img.vozdascomunidades.com.br/wp-content/uploads/2023/03/30125514/Foto_1_-_Arthur_Viana-900x600.jpg', 'https://www.vozdascomunidades.com.br/destaques/escola-de-fotografia-popular-na-mare-esta-com-inscricoes-abertas-25-alunos-receberao-bolsa-auxilio-de-r-500/'),
    ( 'Saúde' , 'A vida vai melhorar' , 'ações da Prefeitura beneficiarão ainda mais a população carioca' , 'Por Prefeitura do Rio', '16/12/2022', 'https://prefeitura.rio/wp-content/uploads/2022/12/52411433454_d2fcf769e3_k-1536x997.jpg', 'https://prefeitura.rio/a-vida-vai-melhor/a-vida-vai-melhorar-acoes-da-prefeitura-beneficiarao-ainda-mais-a-populacao-carioca/'),
    ( 'Esporte' , 'Favela Tênis, no Alemão, abre inscrições para aulas gratuitas e presenciais de francês' , 'Inscrições também podem ser feitas para novas turmas de tênis' , 'Por Thayná De Souza', '17/02/2023', 'https://img.vozdascomunidades.com.br/wp-content/uploads/2021/06/01101950/2021-05-08-FAVELA-TENIS-SELMA-SOUZA-4-900x600.jpg', 'https://www.vozdascomunidades.com.br/esporte/favela-tenis-no-alemao-abre-inscricoes-para-aulas-gratuitas-e-presenciais-de-frances/')
`;

function criaTabelaNoticias() {
  db.run(NOTICIAS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar a tabela de notícias");
  });
}

function populaTabelaNoticias() {
  db.run(ADD_NOTICIAS_DATA, (error) => {
    if (error) console.log("Erro ao popular a tabela de notícias");
  });
}


//==== SOBRE
const SOBRE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SOBRE" (
"ID" INTEGER PRIMARY KEY AUTOINCREMENT,
"TITULO" varchar(255),
"TEXTO" varchar(900)
)`;

const ADD_SOBRE_DATA = `
INSERT INTO SOBRE (TITULO, TEXTO)
VALUES
    ('Quem somos', 'Nós somos uma plataforma voltada para conectar pessoas, empresas e organizações que buscam ajudar as comunidades carentes das favelas do Rio de Janeiro. Acreditamos no poder da união e no potencial transformador do trabalho voluntário e da solidariedade. Nosso objetivo é promover a inclusão social, a educação, a cultura, a saúde e o desenvolvimento sustentável das favelas, garantindo assim melhores condições de vida e oportunidade para as pessoas que vivem nessas comunidades. Contamos com uma equipe dedicada e comprometida com a nossa missão, além de parceiros e voluntários engajados em fazer a diferença. Junte-se a nós nessa jornada!'),
    ('Nossa Missão', 'Nossa missão é levar informação de qualidade para as comunidades, de forma clara e acessível. Acreditamos que a informação é um direito de todos e que é essencial para o desenvolvimento e empoderamento das pessoas Nosso projeto tem como objetivo fornecer, podemos contribuir para a melhoria da qualidade de vida das comunidades e para o desenvolvimento sustentável da sociedade como um todo. Por isso, estamos comprometidos com a nossa missão e trabalhamos diariamente para atingir nossos objetivos e levar informação para aqueles que mais precisam.'),
    ('Notícias', 'As notícias são publicadas por nossos administradores, que também são moradores. Ou seja, é de morador para morador. Você fala, nós escutamos. Nós falamos, mais moradores ficam informados. Acreditamos que ao fornecer informações de qualidade e empoderar as pessoas com o conhecimento, podemos contribuir para a melhoria da qualidade de vida das comunidades e para o desenvolvimento sustentável da sociedade como um todo. Por isso, estamos comprometidos com a nossa missão e trabalhamos diariamente para atingir nossos objetivos e levar informação para aqueles que mais precisam.'),
    ('O Impacto Social', 'Um projeto que visa informar os moradores de uma comunidade pode ter um impacto social significativo na vida das pessoas. Quando os moradores são informados sobre seus direitos e têm acesso a informações importantes sobre serviços públicos e questões sociais, eles podem tomar decisões mais informadas e se engajar mais ativamente na sua comunidade. Visamos informar os moradores de uma comunidade pode ter um impacto social significativo, contribuind o para a melhoria da saúde, o aumento da conscientização sobre direitos humanos e a participação ativa da comunidade em questões sociais e políticas.'),
    ('Projetos', 'Um projeto que fornece informações sobre os direitos humanos pode ajudar a aumentar a conscientização sobre questões importantes, como a discriminação e a violência. Isso pode levar a uma maior tolerância e respeito entre os membros da comunidade, além de ajudar a prevenir e combater atos de violência e discriminação.'),
    ('Comunidades', 'Uma comunidade bem informada é essencial para o seu desenvolvimento e crescimento. Quando os membros de uma comunidade têm acesso a informações precisas e relevantes, eles se tornam mais conscientes dos problemas e oportunidades que afetam suas vidas. Isso pode levar a uma série de benefícios importantes para a comunidade.')
`;

function criaTabelaSobre() {
  db.run(SOBRE_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}

function populaTabelaSobre() {
  db.run(ADD_SOBRE_DATA, (error) => {
    if (error) console.log(error);
  });
}


db.serialize(() => {
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
  populaTabelaImagens();
  criaTabelaSobre();
  populaTabelaSobre();
});
