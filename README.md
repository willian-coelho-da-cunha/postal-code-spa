# Postal Code S. P. A.

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 10.0.8. 

Abaixo estão relacionadas algumas das tecnologias utilizadas na implementação do projeto.

- Angular 10.0.8 / ***Updated to version 13.0.1***
- Angular localize 10.0.14 / ***Updated to version 13.0.1***
- Angular Material 10.1.2 / ***Updated to version 13.0.1***
- Angular Flex Layout 10.0.0-beta.32 / ***Updated to version 12.0.0-beta.34***
- JSON Server 0.16.1
- NGX Mask 10.0.1 / ***Updated to version 12.0.0***
- TypeScript 3.9.5 /***Updated to version 4.4.4***
- HTML5
- CSS3
- Karma 5.0.0 (Testes de unidade) / ***Updated to version 6.4.3***

Ainda, a implementação deste projeto contou com a simulação de uma API RestFull. O responsável por essa simulação foi o JSON Server 0.16.1.


---
## Executar o projeto localmente

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

- Username (e-mail): willian_willian@outlook.com

- Password (senha): person123

---
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

---
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

---
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
