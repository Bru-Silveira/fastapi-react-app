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
- Docker
- Node.js e npm (caso queira rodar sem Docker)
- Python 3.12 e pip (caso queira rodar sem Docker)

### Rodando com Docker 🐳

#### Clone o repositório:
```sh
git clone https://github.com/Bru-Silveira/fastapi-react-app.git
```

#### Inicie os containers do frontend e backend:
Este guia irá ajudá-lo a iniciar os containers Docker para o frontend e backend, garantindo que ambos possam se comunicar através da rede personalizada `foobar`.

##### Crie a rede Docker personalizada(`foobar`):
```sh
docker network create foobar
```

##### Backend
1. Navegue para o diretório `backend` e construa a imagem Docker:
```sh
cd backend
docker build . -t backend
```
2. Inicie o container do backend na rede `foobar`:
```sh 
docker run --name backend -rm --network foobar -p 8000-8000 backend
```
    
##### Frontend
1. Navegue para o diretório `frontend` e construa a imagem Docker:
```sh
cd frontend
docker build . -t frontend
```

2. Inicie o container do frontend na rede `foobar`:
```sh 
docker run --name frontend -rm --network foobar -p 3000-3000 frontend
```

##### Verifique se ambos os containers estão na rede `foobar`e estão em funcionamento:
```sh
docker ps
```

##### Acesse a aplicação:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000/api01` e `http://localhost:8000/api02`
  
### Rodando Manualmente 🖥️

#### Backend

1. Crie um ambiente virtual:
```sh
python3 -m venv venv
```

2. Ative o ambiente virtual:
```sh
source venv/bin/activate
```

3. Instale as dependências:
```sh
cd backend
pip install -r requirements.txt
```

4. Execute o backend:
```sh
uvicorn main:app --reload
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