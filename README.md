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
