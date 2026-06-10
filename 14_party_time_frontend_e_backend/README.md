# 🎉 Party Time

Aplicação Full Stack desenvolvida durante um curso de React, com o objetivo de
gerenciar festas e eventos, permitindo o cadastro de serviços e a criação de
eventos personalizados com orçamento e lista de serviços.

## 🚀 Tecnologias utilizadas

### Frontend

- React
- React Router
- Axios
- CSS

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

## 📁 Estrutura do projeto

```
backend/
frontend/
```

- **backend:** API REST responsável pelo gerenciamento dos dados.
- **frontend:** Interface da aplicação desenvolvida em React.

---

## ⚙️ Pré-requisitos

Antes de executar o projeto é necessário ter instalado:

- Node.js
- npm
- MongoDB Atlas (ou outra instância MongoDB)

---

## 🔧 Configuração

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd 14_party_time_frontend_e_backend
```

---

### 2. Configure o backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo chamado:

```
.env
```

utilizando como base o arquivo:

```
.env.example
```

Exemplo:

```env
MONGO_URI=sua_string_de_conexao_do_mongodb
```

---

### 3. Inicie o backend

```bash
npm start
```

ou

```bash
npm run dev
```

(dependendo do script definido no projeto)

O servidor será iniciado em:

```
http://localhost:3000
```

---

### 4. Configure o frontend

Abra outro terminal:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

---

### 5. Execute o frontend

```bash
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:5173
```

---

## ✨ Funcionalidades

- Cadastro de serviços
- Listagem de serviços
- Atualização de serviços
- Exclusão de serviços
- Cadastro de eventos
- Atualização de eventos
- Exclusão de eventos
- Controle de orçamento do evento

---

## 🔒 Variáveis de ambiente

Este projeto utiliza variáveis de ambiente para armazenar informações sensíveis.

O arquivo `.env` **não é versionado** e deve ser criado localmente utilizando o
`.env.example` como referência.

---

## 📚 Projeto desenvolvido para fins de estudo

Este projeto foi desenvolvido durante um curso de React e Node.js com o objetivo
de praticar a construção de aplicações Full Stack.

---

## 🔐 Configuração das variáveis de ambiente

Antes de executar o backend, crie um arquivo `.env` dentro da pasta `backend`,
utilizando o arquivo `.env.example` como base.

Exemplo:

```env
MONGO_URI=sua_string_de_conexao_do_mongodb
```

Após configurar a variável de ambiente, instale as dependências e execute a
aplicação normalmente.
