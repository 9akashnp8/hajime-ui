from langchain.prompts import PromptTemplate

modify_element_prompt = """
You are an expert in Tailwind CSS.

Given the following html code/element from the user, modify it
as per their requirements

Instructions:
1) The solution should ONLY be based on Tailwind CSS
2) The output should ONLY contain valid modified html code

User HTML Code:
<div><button>Submit</button></div>

Modification Required by User:
change color of button to red
"""