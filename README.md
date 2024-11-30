Projeto Full Stack para disciplina de programação Web 4º Semestre
Alunos: Thiago Venâncio Gomides e Mayssa Barbosa Dias 
Turma: A

# Para rodar o projeto

#### Obs: Certifique-se de ter o docker desktop instalado na sua maquina local para execução dos containers docker

### git clone https://github.com/Tvg2005/ProjetoFullStack.git
### cd ProjetoFullStack/
### docker-compose up --build
### No seu browser acesse o http://localhost:3000 para visualizar o frontend e o http://localhost:3001 para ter acesso a API do backend


# Documentação e descrição do projeto: 

## Sweet Dreams E-commerce
Bem-vindo ao repositório do projeto Sweet Dreams E-commerce! Este projeto é uma aplicação web desenvolvida para oferecer uma experiência de compra online fluida e agradável. Aqui você encontrará todas as informações necessárias para entender a arquitetura, as tecnologias utilizadas e como executar o projeto.

## Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando uma combinação de tecnologias modernas e ferramentas de desenvolvimento. Abaixo estão algumas das principais tecnologias e ferramentas utilizadas:

React: Biblioteca JavaScript para construção de interfaces de usuário.

Axios: Cliente HTTP baseado em Promises para fazer requisições ao backend.

React Router: Biblioteca para gerenciar rotas e navegação dentro da aplicação React.

CSS3: Estilização da aplicação para garantir uma interface de usuário responsiva e amigável.

Node.js: Ambiente de execução para JavaScript no backend.

Express.js: Framework para construir APIs RESTful no backend.

Docker: Ferramenta de virtualização para criar, implantar e executar aplicações em contêineres.

Nginx: Servidor web usado para servir a aplicação em produção.

MongoDB: Banco de dados NoSQL utilizado para armazenar os dados da aplicação.

Estrutura de Arquivos
A estrutura de arquivos do projeto é organizada da seguinte forma:

projetoFullStack/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── redvelvet.jpg
│   │   └── rodape.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cart.js
│   │   │   ├── Header.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── css/
│   │   │   ├── Cart.css
│   │   │   ├── Home.css
│   │   │   ├── Login.css
│   │   │   ├── Main.css
│   │   │   └── Register.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
└── README.md

Descrição dos Diretórios
backend/: Contém todo o código relacionado ao servidor, incluindo os controladores, modelos, rotas e o arquivo principal server.js. Também inclui o Dockerfile para configurar o contêiner Docker do backend.

frontend/: Contém todo o código da interface de usuário desenvolvido com React, incluindo componentes, estilos (CSS) e arquivos públicos. O Dockerfile para configurar o contêiner Docker do frontend também está incluído aqui.

docker-compose.yml: Arquivo de configuração do Docker Compose, utilizado para orquestrar e configurar os serviços do Docker (backend e frontend) de forma simplificada.

Contribuindo
Se desejar contribuir com o projeto, sinta-se à vontade para abrir uma pull request ou reportar issues. Toda ajuda é bem-vinda!