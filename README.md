# PokeDevs-api

DESCRIÇÃO SUPER MANEIRA

## Requisitos

- Yarn or NPM
- Node
- Docker
- Postgres

## Setup

### Dependencias de projeto
Primeiro de tudo você precisará instalar as dependências do projeto, na pasta root execute o comando a seguir.

```bash
yarn

## Expected output
yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

Done in 22.53s.
```


### Banco de dados

Feito isso vamos para a configuração do banco de dados, abra o arquivo `ormconfig.json` e edite os campos `host`, `port`, `username`, `password` e `database` com as suas credenciais. 

Opcionalmente você pode estar pulando essa parte e usando as credênciais já inseridas no arquivo.


### Docker

Caso nao utilize um banco local, sera necessario subir um docker para utilizar o postgree como banco de dados local.

Para isso é necessario que o docker esteja instalado e o wdsl instalado e atualizado, logo apos execute o comando abaixo:

```bash
docker-compose up -d

## Expeted result
Creating network "pokedevs-api_default" with the default driver
Creating pokedevs-api_postgres_1 ... done
```

E pronto temos o banco configurado.

### Migrations

Agora precisamos que nosso banco de dados tenha as tabelas que o app utiliza, para isso iremos executar o seguinte comando com o banco de dados rodando:

```bash
yarn typeorm:migration:run

## Expected result
yarn run v1.22.5
query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = current_schema() AND "table_name" = 'migrations'
... # Ommited
Migration CommentOnAssistance1618687581504 has been executed successfully.
query: COMMIT
Done in 10.98s.
```

### Dump data

Como acabamos de criar nosso banco de dados, Conectar no banco de dados, com as credenciais que se encontram no ormconfig.json e executar os seguintes comandos para popular as tabelas:

```sql
INSERT INTO assistance(actualstart, actualend, subject, pjo_tipodeatividade, pjo_empreendimentoid, pjo_blocoid, pjo_unidadeid)
SELECT 
now() - random() * INTERVAL '45 days', 
now() - random() * INTERVAL '5 days',
(array['Dúvida','Questão','Ajuda','Como funciona'])[floor(random() * 3 + 1)],
(array['Compra', 'Aluguel', 'Venda','Outro','Visita'])[floor(random() * 5 + 1)],
(array[1,2,3,4,5])[floor(random() * 5 + 1)], -- cinco empreendimentos
(array[1,2,3,4])[floor(random() * 4 + 1)], -- de 4 blocos
(array[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40])[floor(random() * 40 + 1)] -- com 40 apartamentosc cada
FROM generate_series(1, 1500);


INSERT INTO occurrence
(ticketnumber, pjo_clientedaunidade, pjo_empreendimentoid, pjo_bloco, pjo_unidade, pjo_bandeira, description)
SELECT 
floor(random() * 500000 + 1),
uuid_generate_v4(),
(array[1,2,3,4,5])[floor(random() * 5 + 1)], -- cinco empreendimentos
(array[1,2,3,4])[floor(random() * 4 + 1)], -- de 4 blocos
(array[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40])[floor(random() * 40 + 1)], -- com 40 apartamentosc cada
(array['azul','amarela','vermelha','verde'])[floor(random() * 4 + 1)],
uuid_generate_v4()
FROM generate_series(1, 10000);
```

## Executando o aplicativo

Com o banco de dados já configurado e as migrations já executadas, podemos seguir para a execução do aplicativo.

```bash
yarn start

## expected result 
Express server has started on port http://localhost:3000.
```

## Utilizando a API

