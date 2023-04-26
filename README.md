# PTBR/EN

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

 -  Node.js
  
 - Typescript
 - Jest (para testes unitários)
 - Express
 - SQLite (Para armazenamento de dados em memória)

## Testes 🚨

O código conta com testes realizados em JEST. Para rodas os testes digite o script no terminal:

 1. Para testes na camada CompetitionBusiness:
 

> `npm run test1`

 2. Para teste na camada ScoreBusiness
 
 

> `npm run test2`

## Considerações finais

A API foi desenvolvida utilizando TypeScript, uma linguagem que permite uma escrita mais segura e fácil manutenção do código. Além disso, utiliza o banco de dados SQLite, permitindo o armazenamento dos dados diretamente na memória, sem a necessidade de configurar um servidor de banco de dados separado.

Com esta API, é possível criar competições e cadastrar resultados, informando a competição, atleta, valor e unidade de medida, de acordo com as regras específicas de cada modalidade. Também é possível visualizar o ranking parcial ou final da competição, com a posição final de cada atleta.

A API foi desenvolvida seguindo as melhores práticas de arquitetura de software, com o objetivo de ser fácil de usar e fácil de integrar em outros projetos. Todos os endpoints estão documentados, permitindo uma fácil integração com outras aplicações.

---
---

# Olympic Games API 
A TypeScript REST API for managing Olympic Games competitions and results related to the Estante Virtual case. Through this API, it's possible to create competitions, register results, and display the competition ranking, allowing for efficient management of the games' outcomes.

### Installation 

 1. Clone the repository

> `git clone https://github.com/FluffyThread/case-estante-virtual.git`

 2. Install dependencies

> `npm install`

### Usage 

 1. Run the application

> `npm run start`

Or

> `npm run dev`

 2. Read the documentation and make requests with the application
    running

[Postman Documentation](https://documenter.getpostman.com/view/22367197/2s93XwyPfa)

## API Features

 - Create a new competition;
 - Return data from all competitions;
 - Finish a competition;
 - Create a score;
 - Return the ranking of a specific competition;
 - Return data from a score;
 - Delete a competition;
 - The API prevents the creation of new scores if the competition has
   ended;
 - The API prevents the creation of new scores from the same user more than 3 times;
 - The ranking returns in ascending order for 100m competitions and in descending order for dart throwing competitions.

  
  ## Technologies used 🚀 

 - Node.js

 

 - TypeScript 
 - Jest (for unit tests)
 - Express
 - Git
 - SQLite (for in-memory data storage)

## Tests 🚨 
The code has tests performed in JEST. To run the tests, type the script in the terminal:

 1. For tests in the CompetitionBusiness layer: 

>  `npm run test1`

 2. For tests in the ScoreBusiness layer:

> `npm run test2`

## Final Considerations

 The API was developed using TypeScript, a language that allows for safer coding and easier maintenance. Additionally, it uses the SQLite database, enabling data storage directly in memory without the need for a separate database server.

With this API, it's possible to create competitions and register results, providing the competition, athlete, value, and unit of measurement according to the specific rules of each sport. It's also possible to view the partial or final ranking of the competition, displaying the final position of each athlete.

The API was developed following the best software architecture practices with the goal of being easy to use and integrate into other projects. All endpoints are documented, allowing for easy integration with other applications.
`
 
