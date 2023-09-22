from typing import Any, Optional, Sequence
from langchain.llms import OpenAI as LCOpenAI

class OpenAI(LCOpenAI):
    """
    Custom implementation with mock response functionality.
    Compared to FakeListLLM, this Allows easy switching b/w mock
    & actual ai response
    """
    def predict(self, text: str, *, stop: Sequence[str] | None = None, **kwargs: Any) -> str:
        if kwargs.get('mock'):
            return "<div><button class='bg-red-500'>Submit</button></div>"
        return super().predict(text, stop=stop, **kwargs)
