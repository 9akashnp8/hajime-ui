from decouple import config
from fastapi import FastAPI
from langchain.llms import OpenAI
from langchain.llms.fake import FakeListLLM

from ai.prompts import modify_element_prompt
from ai.llms import OpenAI

app = FastAPI()
llm = OpenAI(openai_api_key=config("OPENAI_API_KEY"))

@app.get("/")
def get_root(mock: bool):
    result = llm.predict(modify_element_prompt, mock=mock)
    return {"Hello": result}
