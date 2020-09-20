# TRD Front Cep

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 10.0.8. Algumas das tecnologias utilizadas na implementação do projeto foram:

- Angular 10.0.8
- Angular localize 10.0.14
- Angular Material 10.1.2
- Angular Flex Layout 10.0.0-beta.32
- JSON Server 0.16.1
- NGX Mask 10.0.1
- TypeScript 3.9.5
- HTML5
- CSS3
- Karma 5.0.0 (Testes de unidade)

Inicialmente, este projeto foi desenvolvido com a simulação de uma API, utilizando para isso o JSON Server 0.16.1. O objetivo foi ganhar produtividade no desenvolvimento do Front-End ao mesmo tempo em que haveria uma estrutura relativamente fácil para se adaptar a uma integração com o Back-End propriamente dito. O repositório contendo o Back-End que atenderá esse projeto é o **TRD Back Cep**, que se encontra em meu perfil no GitHub.

## Executar o projeto localmente

**Atenção**: Para executar este projeto localmente hoje, não é necessário manipular o repositório que contém o Back-End do mesmo. No entanto, pretende-se mudar este cenário em breve.

Para executar este projeto localmente, você precisará:

- Fazer o download do projeto ou cloná-lo para a sua máquina utilizando uma ferramenta de controle de versão.

- Instalar todas as dependências do projeto:

```
npm install
```

- Instalar de forma global o JSON Server:

```
npm install -g json-server
```

- Utilizando o JSON Server, simular a API:

```
json-server database/database.json
```

- Iniciar o servidor de desenvolvimento do Angular (linguagem: pt-BR):

```
ng serve --configuration=br
```

- Iniciar o servidor de desenvolvimento do Angular (linguagem: en-US):

```
ng serve --configuration=en
```

- No browser, acessar o endereço `http://localhost:4200/`.

- Utilizar as informações de login:

- Username (e-mail): trd@gmail.com

- Password (senha): person123

## Executar testes de unidade

[Karma](https://karma-runner.github.io).

Caso você não tenha seguido os passos descritos acima ainda, será necessário:

- Fazer o download do projeto ou cloná-lo para a sua máquina utilizando uma ferramenta de controle de versão.

- Instalar todas as dependências do projeto:

```
npm install
```

Posteriormente, basta executar o comando abaixo:

```
ng test
```

## Executar testes end-to-end

[Protractor](http://www.protractortest.org/).

Caso você não tenha seguido os passos descritos acima ainda, será necessário:

- Fazer o download do projeto ou cloná-lo para a sua máquina utilizando uma ferramenta de controle de versão.

- Instalar todas as dependências do projeto:

```
npm install
```

Posteriormente, basta executar o comando abaixo:

```
ng e2e
```

## Fazer o build do projeto

Caso você não tenha seguido os passos descritos acima ainda, será necessário:

- Fazer o download do projeto ou cloná-lo para a sua máquina utilizando uma ferramenta de controle de versão.

- Instalar todas as dependências do projeto:

```
npm install
```

Posteriormente, basta executar o comando abaixo para obter o build em todas as localidades definidas no projeto:

```
ng build
```

Ou, basta executar o comando abaixo para obter o build para produção em todas as localidades definidas no projeto:

```
ng build --prod
```

Para obter o build para produção em uma linguagem específica, basta executar um dos comandos listados abaixo:

| Linguagem | Comando                                   |
| --        | --                                        |
| en-US     | `ng build --configuration=production,en`  |
| pt-BR     | `ng-build --configuration=production,br`  |
