# API Jogos Olímpicos

API REST em TypeScript para gerenciamento de competições e resultados dos Jogos Olímpicos referente ao case da [Estante Virtual](https://github.com/estantevirtual/teste_ev). Através dessa API, é possível criar competições, cadastrar resultados e exibir o ranking da competição, permitindo uma gestão eficiente dos resultados dos jogos.

### Instalação

 1. Clone o Repositório

> `git clone https://github.com/FluffyThread/case-estante-virtual.git`

 2. Instale as dependências

> `npm install`

### Uso

 1. Rode a aplicação

> `npm run start`

Ou

> `npm run dev`
 

 2. Leia a documentação e faça as requisições com a aplicação rodando
 
[Documentação Postman](https://documenter.getpostman.com/view/22367197/2s93XwyPfa)

## Funcionalidades da API

 - Criar uma nova competição;
 - Retornar os dados de todas as competições;
 - Finalizar uma competição;
 - Criar pontuação;
 - Retornar o ranking de determinada competição;
 - Retornar os dados de uma pontuação;
 - Deletar uma competição;
 - A API impede a criação de novas pontuações caso a competição tenha sido encerrada;
 - A API impede a criação de novas pontuações de um mesmo usuário por mais de 3 vezes.
 - O Ranking retorna em ordem crescente para competições de 100m e em ordem decrescente para competições de lançamento de dardos.

## Tecnologias utilizadas 🚀

 - Node.js
 - Typescript
 - Jest (para testes unitários)
 - Express
 - Git
 - SQLite (Para armazenamento de dados em memória)

## Testes 🚨

O código conta com testes realizados em JEST. Para rodar os testes digite o script no terminal:

 1. Para testes na camada CompetitionBusiness:
 

> `npm run test1`

 2. Para testes na camada ScoreBusiness
 
 

> `npm run test2`

## Considerações finais

A API foi desenvolvida utilizando TypeScript, uma linguagem que permite uma escrita mais segura e fácil manutenção do código. Além disso, utiliza o banco de dados SQLite, permitindo o armazenamento dos dados diretamente na memória, sem a necessidade de configurar um servidor de banco de dados separado.

Com esta API, é possível criar competições e cadastrar resultados, informando a competição, atleta, valor e unidade de medida, de acordo com as regras específicas de cada modalidade. Também é possível visualizar o ranking parcial ou final da competição, com a posição final de cada atleta.

A API foi desenvolvida seguindo as melhores práticas de arquitetura de software, com o objetivo de ser fácil de usar e fácil de integrar em outros projetos. Todos os endpoints estão documentados, permitindo uma fácil integração com outras aplicações.

 
