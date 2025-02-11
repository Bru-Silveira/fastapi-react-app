from typing import List

from fastapi import FastAPI

from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware

import json

app = FastAPI()

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Permita apenas o React em localhost
    allow_credentials=True,
    allow_methods=["*"],  # Permita todos os métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Permita todos os headers
)

# api01 - dados fixos (pessoas)
class Person(BaseModel):
    id: int
    name: str
    age: int

DB: List[Person] = [
    Person(id=1, name="Jamila", age=22),
    Person(id=2, name="Alex", age=18),
    Person(id=3, name="Ali", age=15)
]

@app.get("/api01")
def get_people():
    return DB

# api02 - dados dinâmicos - retorna os dados de um arquivo JSON (cidades e estados)
@app.get("/api02")
def get_cities():
    with open("cities.json", "r", encoding="utf-8") as file:
        cities = json.load(file)
    return cities



