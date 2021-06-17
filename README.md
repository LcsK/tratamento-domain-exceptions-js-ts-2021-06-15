<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Técnicas de tratamento de exceções de domínio em JavaScript com TypeScript

## Descrição

A aula de hoje trata-se sobre técnicas de tratamento de erros e exceções que fazem parte do modelo de domínio / regras de negócio da aplicação. Tópicos como exceções esperadas versus inesperadas, como manter o fluxo de execução explícito, como manter retornos expressivos e como ter clareza no que aconteceu através do retorno são abordados e implementados utilizando métodos diferentes e tudo baseado em experiências reais do meu dia a dia.

Alternativas exploradas:
- Usando null;
- Usando throw's genéricas;
- Entendendo objeto Error;
- Retornando objetos de erro de domínio;
- Padronizando interface de retorno com Either;
- Criando objeto de estado inválido da entidade.

Conceitos-chave:
- Exceções esperadas vs inesperadas;
- Fluxo de execução explícito;
- Retornos expressivos;
- Clareza no que aconteceu através do retorno.


## Projeto

### Domínio

Este projeto gira em torno da criação da entidade Person, que possui as seguintes propriedades:
- Nickname: uma string não vazia
- Age: um número inteiro e positivo

## Repositório

Este repositório conta com três branches:
- main
- boilerplate
- final

Caso você queira acompanhar a evolução do código durante a aula, a branch `boilerplate` dá a estrutura inicial para você poder começar.

A branch `main` contém o projeto em sua versão final em conformidade ao que foi mostrado no vídeo. Você pode acompanhar a evolução do projeto, em conformidade com os passos seguidos na aula, através do histórico de commits.

A branch `final` possui alguns incrementos nos arquivos:
- src/Nickname.ts
- src/Person.ts
- app.ts
Com a intenção de demonstrar as validações replicada nas demais funções


## Dependências

- [npm 7.12.1](https://www.npmjs.com/)
- [Node.js 14.17.0](https://nodejs.org/en/)

## Scripts

- `npm ci`: Instala as dependências via npm;
- `npm run compile`: Transpila o código para JavaScript e os armazena na pasta `dist/`;
- `npm run start:local`: Executa a aplicação, usando o arquivo `app.ts` como ponta de entrada;
- `npm run start:watch`: Executa o mesmo que `npm run start:local`, reexecutando-o a cada alteração.

## Rodando o projeto localmente

1. Instale o Node.js (já vem com o npm) através do link disponibilizado acima;
2. Execute o comando `npm ci`;
3. Execute o comando `npm start:local` ou `npm run start:watch` para executar o código e ver os resultados;
4. Modifique o arquivo `app.ts` para modificar as entradas.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/18530419?v=4" width="75px;"/>](https://github.com/LcsK) |
| :-: |
|[Lucas Lopes](https://github.com/LcsK)|
