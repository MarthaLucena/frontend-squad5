import "./Bairros.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Bairros = () => {
  const [indice, setIndice] = useState(0);

  const bairros = [
    {
      "titulo": "São Cristóvão",
      "descricao": "A região administrativa de São Cristóvão abrange os bairros de Benfica, Mangueira, São Cristóvão e Vasco da Gama. Se destaca por diversos motivos, como museus, Quinta da Boa Vista e a Feira de São Cristóvão.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
      "titulo": "Tijuca",
      "descricao": "A região administrativa da Tijuca é conhecida por abrigar o Parque Nacional da Tijuca, além dos bairros de Alto da Boa Vista, Tijuca e Praça da Bandeira.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
      "titulo": "Vila Isabel",
      "descricao": "Com uma localização privilegiada, a região administrativa de Vila Isabel é conhecida por seus bares e restaurantes, além dos bairros de Andaraí, Grajaú, Maracanã e Vila Isabel.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
      "titulo": "Ramos",
      "descricao": "A região administrativa de Ramos abrange os bairros de Bonsucesso, Manguinhos, Olaria e Ramos. Conhecida pela Praia de Ramos, a região também conta com parques naturais.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
      "titulo": "Penha",
      "descricao": "A região administrativa da Penha é conhecida por abrigar a Igreja da Penha, além dos bairros de Brás de Pina, Penha e Penha Circular. Conta com a Igreja da Penha, um importante ponto turístico da cidade.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
      "titulo": "Inhaúma",
      "descricao": "Aregião administrativa de Inhaúma abrange os bairros de Engenho da Rainha, Higienópolis, Inhaúma e Tomás Coelho. A região tem uma forte presença de comércio, com diversas lojas, mercados, farmácias, restaurantes e outros estabelecimentos. Também conta com algumas opções de lazer, como o Parque Ary Barroso, que possui quadras esportivas, campo de futebol, pista de skate e playground para crianças. ",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
      "titulo": "Méier",
      "descricao": "A região administrativa do Méier é conhecida por abrigar o Shopping Norte Shopping, além dos bairros de Abolição, Água Santa, Cachambi, Engenho de Dentro, Engenho Novo, Jacaré, Lins de Vasconcelos, Méier, Pilares, Riachuelo, Rocha, Sampaio, São Francisco Xavier, Todos os Santos, Piedade e Encantado.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
      "titulo": "Irajá",
      "descricao": "A região administrativa de Irajá abrange os bairros de Colégio, Irajá, Vicente de Carvalho, Vila Kosmos, Vila da Penha e Vista Alegre. Conhecida por seus diversos atrativos culturais e naturais.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
      "titulo": "Madureira",
      "descricao": "A região administrativa de Madureira é conhecida por abrigar o Mercadão de Madureira, além dos bairros de Bento Ribeiro, Campinho, Cascadura, Honório Gurgel, Madureira, Marechal Hermes, Oswaldo Cruz, Quintino Bocaiúva, Rocha Miranda, Vaz Lobo e Turiaçú.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
       "titulo": "Ilha do Governador",
       "descricao": "Localizada na Ilha do Governador, a região é composta pelos bairros Bancários, Cacuia, Cidade Universitária, Cocotá, Freguesia, Galeão, Jardim Carioca, Jardim Guanabara, Moneró, Pitangueiras, Portuguesa, Praia da Bandeira, Tauá, Ribeira e Zumbi.",
       "imagem": "./src/assets/img/favela.jpg"
    },
    {
       "titulo": "Anchieta",
       "descricao": "A região de Anchieta é composta pelos bairros de Anchieta, Guadalupe, Parque Anchieta e Ricardo de Albuquerque. É uma das regiões mais populosas da cidade do Rio de Janeiro, com uma grande presença de comércio e serviços.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
       "titulo": "Jacarezinho",
       "descricao": "O Jacarezinho é um bairro localizado na Zona Norte do Rio de Janeiro, conhecido pela presença de uma das maiores favelas da cidade. Apesar dos problemas sociais, o bairro possui uma forte tradição cultural, sendo um importante centro de produção artística.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
       "titulo": "Complexo do Alemão",
       "descricao": "O Complexo do Alemão é uma das maiores favelas do Rio de Janeiro, composta por diversas comunidades como Nova Brasília, Palmeiras, Morro do Alemão, entre outras. Apesar dos problemas sociais, a região possui uma forte identidade cultural e um grande potencial turístico.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
       "titulo": "Complexo da Maré",
       "descricao": "O Complexo da Maré é uma grande região composta por diversas favelas como Parque Maré, Baixa do Sapateiro, Vila do João, entre outras. A região possui uma grande diversidade cultural e é conhecida por ser um importante centro de produção audiovisual.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
       "titulo": "Pavuna",
       "descricao": "A região da Pavuna é composta pelos bairros de Acari, Barros Filho, Coelho Neto, Costa Barros, Parque Colúmbia e Pavuna. É uma região que possui localização estratégica, próxima a importantes vias expressas como a Avenida Brasil e a Linha Vermelha, o que facilita o acesso a outras partes da cidade. Além disso, o bairro possui uma ampla oferta de comércio e serviços.",
      "imagem": "./src/assets/img/favela.jpg"
    },
    {
       "titulo": "Vigário Geral",
       "descricao": "A região de Vigário Geral é composta pelos bairros de Cordovil, Parada de Lucas, Jardim América e Vigário Geral. Conhecida por ser um importante polo de produção cultural e por abrigar a escola de samba Imperatriz Leopoldinense.",
      "imagem": "./src/assets/img/favela.jpg"
    }
  ];



  return (
    <section className="bairros-wrapper">
      <div className="botoes">
        <FaChevronLeft size="50px" onClick={() => setIndice((indice - 1 + bairros.length) % bairros.length)} />
      </div>
      <div className="bairros">
        <h2 className="containerTitulo">Conheça nosso Subúrbio</h2>

        <div className="bairroContainer">

          <div className="bairroTituloDescricao">
            <h2 className="bairroTitulo">{bairros[indice].titulo}</h2>
            <p className="bairroDescricao">{bairros[indice].descricao} </p>
          </div>

          <img src={bairros[indice].imagem} className="bairroImagem" />


        </div>
      </div>
      <div className="botoes">
        <FaChevronRight size="50px" onClick={() => setIndice((indice - 1 + bairros.length) % bairros.length)} />
      </div>
    </section>

  );
};

export default Bairros;
