# Function as values

from collections.abc import Iterator
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



# First-class function: A function that is treated like any other value
from collections.abc import Callable

def square(x: int) -> int:
    return x * x

# Assign function to a variable
f: Callable[[int], int] = square

print(f(5))
# 25


# Higher-order function: A function that accepts another function as an argument or returns a function
# def square(x: int) -> int:
#     return x * x

def my_map(func: Callable[[int], int], arg_list: list[int]) -> list[int]:
    result: list[int] = []
    for i in arg_list:
        result.append(func(i))
    return result

squares: list[int] = my_map(square, [1, 2, 3, 4, 5])
print(squares)
# [1, 4, 9, 16, 25]



#Map :-
# The map() function applies a given function to each item of an iterable (like a list) and returns a map object (which is an iterator).
# It's a higher-order function that takes a function and an iterable as arguments.
numbers = [1, 2, 3, 4, 5]
squares = list(map(square, numbers))
print(squares)


def change_bullet_style(document: str) -> str:
    l : list[str] = document.split("\n")
    i : Iterator[str] = map(convert_line,l)
    return "\n".join(list(i))


# Don't edit below this line


def convert_line(line: str) -> str:
    old_bullet = "-"
    new_bullet = "*"
    if len(line) > 0 and line[0] == old_bullet:
        return new_bullet + line[1:]
    return line


# Filter:-
# The filter() function constructs an iterator from elements of an iterable for which a function returns true

def is_even(x: int) -> bool:
    return x % 2 == 0

numbers: list[int] = [1, 2, 3, 4, 5, 6]
evens: list[int] = list(filter(is_even, numbers))
print(evens)
# [2, 4, 6]

def remove_invalid_lines(document: str) -> str:
    return "\n".join(filter(lambda line: not line.startswith("-"), document.split("\n")))



#Reduce:-
# The reduce() function is a part of the functools module in Python. It applies a rolling computation to sequential pairs of values in a list. It takes two arguments: a function and an iterable
from functools import reduce

def add(x: int, y: int) -> int:
    return x + y

numbers: list[int] = [1, 2, 3, 4, 5]
total: int = reduce(add, numbers)
print(total)
# 15    


#Zip :-
#The zip function takes two iterables (often lists), and returns a new iterable where each element is a tuple containing one element from each of the original iterables.


valid_formats: list[str] = [
    "docx",
    "pdf",
    "txt",
    "pptx",
    "ppt",
    "md",
]

# Don't edit above this line


def pair_document_with_format(
    doc_names: list[str], doc_formats: list[str]
) -> list[tuple[str, str]]:
    return list(
        filter(
            lambda pair: pair[1] in valid_formats,
            zip(doc_names, doc_formats)
        )
    )
