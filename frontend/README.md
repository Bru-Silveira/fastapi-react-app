# Projeto Fullstack - React e FastAPI 🚀

Este projeto é uma aplicação fullstack que consiste em um frontend desenvolvido com React e um backend utilizando FastAPI. A aplicação permite acessar e exibir dados de pessoas e cidades através de uma API.

## 🛠️ Tecnologias Utilizadas

### Frontend:
- React 19
- Axios
- React Scripts
- Docker

### Backend:
- FastAPI
- Uvicorn
- Python
- Pydantic
- Docker

## 📂 Estrutura do Projeto

```
/
├── backend/                
│   ├── Dockerfile
│   ├── main.py
│   ├── requirements.txt
│   └── ...
├── frontend/              
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── ...

```

## 🚀 Como Rodar o Projeto

### Requisitos
Antes de iniciar, você precisa ter instalado:
- Docker e Docker Compose
- Node.js e npm (caso queira rodar sem Docker)
- Python 3.12 e pip (caso queira rodar sem Docker)

### Rodando com Docker 🐳

1. Clone o repositório:
   ```sh
   git clone https://github.com/Bru-Silveira/fastapi-react-app.git
   cd Bru-Silveira/fastapi-react-app
   ```

2. Inicie os containers do frontend e backend:
  - Backend
    
    Navegue para o diretório `backend` e construa a imagem Docker:**
    ```sh
    cd backend
    docker build . -t backend

    Inicia o container `backend`:
    ```sh
    docker run --name backend -rm -p 8000:8000 backend


3. Acesse a aplicação:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8000/docs`

### Rodando Manualmente 🖥️

#### Backend
1. Instale as dependências:
   ```sh
   cd backend
   pip install -r requirements.txt
   ```
2. Execute o backend:
   ```sh
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

#### Frontend
1. Instale as dependências:
   ```sh
   cd frontend
   npm install
   ```
2. Inicie o frontend:
   ```sh
   npm start
   ```

## 🔥 Endpoints Disponíveis

### Pessoas (dados fixos)
- `GET /api01` - Retorna uma lista fixa de pessoas

### Cidades (dados dinâmicos do arquivo `cities.json`)
- `GET /api02` - Retorna uma lista de cidades e estados

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo! 🎉

