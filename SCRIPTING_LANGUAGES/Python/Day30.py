# Function ad values
from collections.abc import Callable


def file_to_prompt(
    file: dict[str, str], to_string: Callable[[dict[str, str]], str]
) -> str:
    hope:str=to_string(file)
    return f"```\n{hope}\n```"
   
    
#Anonymous function or lambda function
def file_type_getter(
    file_extension_tuples: list[tuple[str, list[str]]],
) -> Callable[[str], str]:
    file_extensions_dict :dict[str,str]= {}

    for file_type, extensions in file_extension_tuples:
        for extension in extensions:
            file_extensions_dict[extension] = file_type
    return lambda name: file_extensions_dict.get(name,"Unknown")

