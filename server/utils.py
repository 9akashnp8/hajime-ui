import re

def clean_generated_html(gen_html: str) -> str:
    extra_space_pattern = r'(?<=>)\s+(?=[^<]*<|$)'
    clear_space = gen_html.replace("\n", "")
    return re.sub(extra_space_pattern, '', clear_space)

