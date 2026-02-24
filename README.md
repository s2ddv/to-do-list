# 🚀 To Do List - Secure Full Stack Application

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue" />
  <img src="https://img.shields.io/badge/Backend-Django-green" />
  <img src="https://img.shields.io/badge/Frontend-React-blue" />
  <img src="https://img.shields.io/badge/Database-MySQL-orange" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey" />
</p>

---

## 📌 Sobre o Projeto

Aplicação **Full Stack** de gerenciamento de tarefas desenvolvida com foco em:

- 🔐 Autenticação segura com JWT  
- 🏗 Arquitetura organizada (Frontend + Backend)  
- 🛡 Boas práticas de segurança  
- 🎨 Interface moderna e responsiva  
- 📦 Separação clara de responsabilidades  

Este projeto simula uma aplicação real utilizada em ambientes profissionais.

---

## 🛠 Tecnologias Utilizadas

### 🔹 Frontend
- React
- TailwindCSS
- Axios
- React Router DOM

### 🔹 Backend
- Python
- Django
- Django REST Framework
- Simple JWT

### 🔹 Banco de Dados
- MySQL

---

## 🏗 Arquitetura

```
to-do-list/
│
├── backend/
│   ├── users/          # App responsável por autenticação
│   ├── tasks/          # App responsável pelas tarefas
│   └── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## 🔐 Funcionalidades

- ✅ Registro de usuário
- 🔑 Login com JWT
- 🔒 Proteção de rotas autenticadas
- ➕ Criar tarefas
- 📋 Listar tarefas do usuário autenticado
- ✏ Atualizar tarefas
- ❌ Deletar tarefas
- 👤 Associação de tarefas por usuário

---

## ⚙️ Como Executar Localmente

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/to-do-list.git
cd to-do-list
```

---

### 🔹 2. Backend (Django)

```bash
cd backend

python -m venv venv
venv\Scripts\activate  # Windows

pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate

python manage.py runserver
```

Servidor rodando em:
```
http://127.0.0.1:8000/
```

---

### 🔹 3. Frontend (React)

```bash
cd frontend

npm install
npm run dev
```

Aplicação rodando em:
```
http://localhost:5173/
```

---

## 🔐 Segurança Implementada

- Autenticação baseada em JWT
- Proteção de endpoints no backend
- Associação de dados por usuário autenticado
- Separação de responsabilidades
- Validação de dados via serializers

---

## 📈 Melhorias Futuras

- [ ] Deploy em produção (AWS / Railway / Vercel)
- [ ] Dockerização da aplicação
- [ ] Implementação de Refresh Token com rotação
- [ ] Testes automatizados (Pytest / Jest)
- [ ] Dark Mode
- [ ] CI/CD com GitHub Actions

---

## 🎯 Objetivos Técnicos

Este projeto foi desenvolvido para:

- Aplicar conceitos de autenticação segura
- Trabalhar com arquitetura Full Stack real
- Praticar integração entre frontend e backend
- Simular ambiente de aplicação corporativa
- Evoluir para um padrão de código profissional

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Sinta-se livre para usar como base de estudos ou evolução profissional.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
