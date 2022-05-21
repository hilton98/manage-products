# manage-products
#### Observação
Projeto incompleto, possuindo apenas o frontend com o auxílio do bootstrap. Também existem as rotas e o desenho das migrações das tabelas com o sequelize.
Todo o projeto foi feito no Ubuntu 20.04.

Abrir um terminal no projeto e rodar os seguintes comandos:

### obs: Não fiz as interações com o BD e imagino que será desnecessário seguir os passos a seguir de instalação do sequelize.
* npm install express --save -> adiciona o express no projeto nodejs
* npm install sequelize sequelize-cli mysql2 -> instalar sequelize e drive para mysql2
* npx sequelize init -> gerar arquivo de configuração básicos

* npx sequelize model:create --name Product --attributes "id:integer, name:string" -> criar migração
* npx sequelize db:migrate -> gerar as tabelas no banco

### instalação do bootstrap e sass

* sudo npm install sass -g
* npm install node-sass-middleware
* npm i @fortawesome/fontawesome-free
* npm install jquery popper.js bootstrap


* comando para executar o projeto: **node backend/index.js**

As telas a seguir devem aparecer ao executar o comando acima:

![image](https://user-images.githubusercontent.com/52581668/169627140-7d4ea8b7-3739-49b0-b588-a3e04f4b1897.png)

![image](https://user-images.githubusercontent.com/52581668/169627155-364a7c6e-f29b-43a7-b0f4-e4410cd76bd7.png)
