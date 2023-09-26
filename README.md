# Fullstack Challenge 20230720 - 4yousee | Backend Developer

## Descrição

Projeto feito como desafio proposto durante o processo seletivo da empresa 4yousee. Consiste em um filtro de planos de telefonia vendidos juntamente com o um aparelho. Os filtros funcionam com base no nome do plano e na localidade do mesmo. Somente um plano com o mesmo nome é mostrado, de acordo com a prioridade da sua localidade e data de oferta, quanto mais expecifica a localidade maior a prioridade.

## Tecnologias Utilizadas

- O backend com a lógica e as regras de negócio foram feitas de forma de separadas do frontend, de forma que possa ser transformado em uma API e ser utilzado de forma independente.
- O backend utiliza NodeJs e express como framework na linguagem TypeScript
- O frontend utiliza Javascript para as requisições no backend e manipulação do DOM
- CSS para estilzação da página
- HTML como linguagem de marcação

## Como instalar e utilizar

- Clonar o repositório do github
  ```
  git clone https://github.com/hugolmribeiro/fullstack-challenge-4yousee.git
  ```
- Depois de clonado, na linha de comando, rodar o seguinte comando para instalar as dependências do projeto. (_É necessário ter o node e o npm instalados no computador para rodar os comandos a seguir_)
  ```
  npm install
  ```
- Em seguida, o comando para compilar o código de typescript para javascript
  ```
  npx tsc
  ```
- Por fim, rodar o comando para iniciar a execução do node
  ```
  node dist/script.js
  ```
- Para acessar o frontend, basta abrir o arquivo frontend/index.html no navegador

- Link para instalar o [node](https://nodejs.org/en/download)

## Arquivo .gitignore

```
script-resulution.js

node_modules
dist
```

## Documentação e processo de investigação

Utilizei node devido a ser a stack da vaga, e utilizei o framework express para utilizar seu sistema de roteamento de endpoints, visto que julguei que seria ideial colocar toda a lógica e regras de negócio do desafio em uma API no backend, onde o front apenas precisaria fazer uma requisição para obter os dados filtrados de acordo com as condições propostas. Escolhi o express como framework pela sua maneira eficaz e flexível de construir backends para APIs RESTful, afim de poder focar esforços em desenvolver as regras de negócio da melhor forma possível.

Decidi usar o typescript em detrimento ao javascript por um gosto pessoal prefiro linguagens de programção com uma tipagem mais forte. E por isso, preferi criar classes de entidades para compor um modelo de dados mais rígido e mais prevísivel que manipular o json ou os objetos do javascript, tentando aproximar-se dos princípios SOLID.

Deixei na pasta de http o controller e a rota do endpoint, que representam a camada mais externa da API, sua principal responsabilidade é tratar a entrada da requisição vinda do front e a saída com o retorno do endpoint.

Na pasta features, está a camada mais interna, que é onde se encontra toda a funcionalidade da API. Temos as classes de entidades já citadas anteriormente, que nada mais são do que a representação em typescript da entrada de dados em json, adicionando também o encapsulamento da POO. E a classe de serviço que é onde está a implementação dos filtros.

A lógica usada no serviço foi, primeiramente fazer a leitura do arquivo e fazer a conversão para o objeto de json padrão do typescript, em seguida instanciar um array tipado com a classe Plan com os dados de cada plano. Depois de eliminar os planos cujo a data de oferta está no futuro, é feita a escolha do plano com a localidade de prioridade mais alta, e caso aja empate em prioridade de planos com o mesmo nome, será escolhido o plano com a data de oferta mais recente. Isso é feito criando um dicionário genérico cuja a chave é o nome do plano, se não houve uma chave com o nome do plano da iteração atual, o plano é adicionado no dicionário, caso contrári, são verifcados os critérios de prioridade citados anteriormente, se eles são satisfeitos, o plano atual substituirá o plano escolhido anteriormente no dicionário. Ao final é retornado o array com os valores desse dicionário, que são objetos do tipo Plan.

Por fim, a classe de resposta é instanciada com as informações do aparelho e o array retornado pelos filtros. Após o retorno da api o frontend exibe os dados dos planos escolhidos que seriam mais relevantes para um cliente.

## Link da apresentação
https://www.loom.com/share/cea71e297f2e41ef81261ad694ea6ba0

> This is a challenge by [Coodesh](https://coodesh.com/)
