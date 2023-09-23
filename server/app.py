from decouple import config
from fastapi import FastAPI
from langchain.llms import OpenAI
from fastapi.middleware.cors import CORSMiddleware

from ai.prompts import modify_element_prompt
from ai.llms import OpenAI

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
    return {"Hello": result}
