from typing import Any, Sequence
from langchain.llms import OpenAI as LCOpenAI

from utils import mock_generated_html

class OpenAI(LCOpenAI):
    """
    Custom implementation with mock response functionality.
    Compared to FakeListLLM, this Allows easy switching b/w mock
    & actual ai response
    """
    def predict(self, text: str, *, stop: Sequence[str] | None = None, **kwargs: Any) -> str:
        if kwargs.pop('mock'):
            return mock_generated_html
        return super().predict(text, stop=stop, **kwargs)
