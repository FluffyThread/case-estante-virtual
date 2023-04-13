# API Jogos Olímpicos

API REST em TypeScript para gerenciamento de competições e resultados de Jogos Olímpicos. A API é capaz de criar competições, cadastrar resultados e exibir o ranking da competição.

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
 - SQLite (Para armazenamento de dados em memória)

## Testes 🚨

O código conta com testes realizados em JEST. Para rodas os testes digite o script no terminal:

 1. Para testes na camada CompetitionBusiness:
 

> `npm run test1`

 2. Para teste na camada ScoreBusiness
 
 

> `npm run test2`

## Considerações finais

Este projeto é uma API REST em TypeScript para gerenciamento de competições e resultados de Jogos Olímpicos feita a partir da referência ao case da [EstanteVirtual](https://github.com/estantevirtual/teste_ev). A arquitetura de software em camadas utilizada no projeto facilita a manutenção e compreensão do código. Para executar o projeto, é necessário seguir os passos descritos acima.

 