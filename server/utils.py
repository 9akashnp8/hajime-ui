import re

def clean_generated_html(gen_html: str) -> str:
    extra_space_pattern = r'(?<=>)\s+(?=[^<]*<|$)'
    clear_space = gen_html.replace("\n", "")
    return re.sub(extra_space_pattern, '', clear_space)

mock_generated_html = "<div class=\"bg-white shadow-md rounded-lg overflow-hidden\">\n  <div class=\"p-4\">\n    <div class=\"text-lg font-bold\">Informative Card</div>\n    <div class=\"text-gray-700 text-base\">\n      Here is the content of the card\n    </div>\n  </div>\n</div>"    