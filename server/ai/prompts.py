from langchain.prompts import PromptTemplate

create_element_prompt = """
You are an expert in Tailwind and love helping
others build modern UI.

Given the following input from the user, generate
HTML code as per their requirements.

Instructions:
1) The code must ONLY be based on Tailwind CSS
2) The output layout/design should be modern
3) The output should only contain valid HTML code

User Requirements:
Generate a informative card element

HTML:
"""

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