# teste-estagio-salvus
**<h3>CRUD em NodeJS</h3>**


Crud desenvolvido em nodejs, utilizando express com postgreSQL

**Ferramentas utilizadas**

Node JS;
Express;
Conceito Rest;
Sequelize (ORM);
Yup (Validações).

**Executar o projeto**

* Para executar o projeto localmente :
* Ter o PostgreSQL instalado;
* Ter Node JS instalado;
* Comando ‘npm i’ para instalar dependências
* Alterar os campos em config/database.js para as credenciais do seu banco de dados;
* Comando npx sequelize db:migrate para criar tabela do banco;
* Caso queira testar rotas, instalar Postman ou Insomnia



**<h4>Rotas</h4>**

**Rota GET  ‘/api/patients’**

Exibe todos os pacientes cadastrados

* Retorna: Todos os pacientes cadastrados, caso não tenha nenhum, retorna array vazio

**Rota GET  ‘/api/patients/:patientsId’**

Exibe o paciente cadastrado no Id correspondente

* Recebe: Na URL recebe id do paciente desejado
* Retorna: O paciente com id selecionado, caso não tenha nenhum, retorna o erro

**Rota POST ‘/api/patients’**

Cadastra o paciente

* Recebe: JSON no formato 
```
{
	"name": "Name",
	"email": "seuemail@email.com"
}
```
* Retorna: O paciente cadastrado. E erro, caso nome ou email não seja preenchido, ou caso o campo email não seja preenchido com um email





**Rota PUT  '/api/patients/:patientsId'**

Edita o paciente do id selecionado

* Recebe: Id como parâmetro na URL, e JSON no formato não sendo obrigatório preenchimento dos dois campos
```
{
	"name": "Name",
	"email": "seuemail@email.com"
}
```
 
* Retorna: Mensagem de sucesso caso paciente tenha sido editado, e de erro caso o Id não exista, ou algum dos campos esteja inválido

**Rota DELETE  '/api/patients/:patientsId'**

Exclui o paciente do id selecionado

* Recebe: Id como parâmetro na URL
 
* Retorna: Mensagem de sucesso caso paciente tenha sido deletado, e de erro caso o Id não exista







