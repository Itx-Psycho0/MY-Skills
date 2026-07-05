# Function ad values
from collections.abc import Callable


def file_to_prompt(
    file: dict[str, str], to_string: Callable[[dict[str, str]], str]
) -> str:
    hope:str=to_string(file)
    return f"```\n{hope}\n```"
    
