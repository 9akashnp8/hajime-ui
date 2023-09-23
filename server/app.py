from decouple import config
from fastapi import FastAPI
from langchain.llms import OpenAI
from fastapi.middleware.cors import CORSMiddleware

from models import GenerateElementPayload
from ai.prompts import modify_element_prompt, create_element_prompt
from ai.llms import OpenAI
from utils import clean_generated_html

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
llm = OpenAI(openai_api_key=config("OPENAI_API_KEY"))

@app.get("/")
def get_root(mock: bool):
    result = llm.predict(modify_element_prompt, mock=mock)

@app.post('/generate')
def generate_element(payload: GenerateElementPayload, mock: bool = True):
    result = clean_generated_html(llm.predict(create_element_prompt, mock=mock))
    return {"result": result}

