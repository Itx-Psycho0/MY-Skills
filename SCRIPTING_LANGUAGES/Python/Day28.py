#Scope
def get_max_health(modifier, level):
    return modifier * level


my_modifier = 5
my_level = 10


max_health = get_max_health(my_modifier, my_level)


print(f"max_health is: {max_health}")

#Error and Exception Handling

#syntax error
#this is not valid code, so it will error
#      ^
# SyntaxError: invalid syntax


#exception error
# Errors detected during execution are called "exceptions" and can be handled gracefully by your code.

try:
  10 / 0
except Exception:
  print("can't divide by zero")

#If we want to access the data from the exception, we use the following syntax:
try:
  10 / 0
except Exception as e:
  print(e)

# prints "division by zero"


#-----------
def main():
    try:
        print(get_player_record(1))
        print(get_player_record(2))
        print(get_player_record(3))
        print(get_player_record(4))
        print(get_player_record(5))

    except Exception as e:
        print(e)

# Don't edit below this line


def get_player_record(player_id):
    if player_id == 1:
        return {"name": "Slayer", "level": 128}
    if player_id == 2:
        return {"name": "Dorgoth", "level": 300}
    if player_id == 3:
        return {"name": "Saruman", "level": 4000}
    if player_id == 5:
        return {"name": "Gandalf", "level": 5000}
    raise Exception("player id not found")


main()

#Raising Your Own Exceptions
def get_player_record(player_id):
    if player_id == 1:
        return {"name": "Slayer", "level": 128}
    if player_id == 2:
        return {"name": "Dorgoth", "level": 300}
    if player_id == 3:
        return {"name": "Saruman", "level": 4000}
    raise Exception("player id not found")



#Don't Catch Your Own Exceptions
# don't do this
def craft_sword(metal_bar):
    try:
        if metal_bar == "bronze":
            return "bronze sword"
        if metal_bar == "iron":
            return "iron sword"
        if metal_bar == "steel":
            return "steel sword"
        raise Exception("invalid metal bar")
    except Exception as e:
        print(f"An error occurred: {e}")




#Different Types of Exceptions

#what is important to understand is that there are different types of exceptions, and we can handle them differently depending on the situation. Some exceptions are more specific, like ZeroDivisionError (which happens when you divide by zero) or IndexError (which happens when you try to access a list element at an invalid index – either too high or too low). Others are more general, like the base Exception.

# Syntax
try:
    10/0
except ZeroDivisionError:
    print("0 division")
except Exception as e:
    print(e)

try:
    nums = [0, 1]
    print(nums[2])
except IndexError:
    print("index error")
except Exception as e:
    print(e)

# Which will print:

# 0 division
# index error

# Why Specific Exceptions Come First
# When handling exceptions, it's important to catch the most specific ones first, because Python stops checking once it finds a matching exception handler. If you catch a more general Exception first, any specific errors will never get handled individually.

# For example:

try:
    nums = [0, 1]
    print(nums[2])
except Exception:
    print("An error occurred")
except IndexError:
    print("Index error")

# In this case, the general Exception will catch the error before the IndexError can be reached, and the message "Index error" will never be printed. Always handle the most specific exception first!

# Alias Exception Messages
# As seen in the example, you can also access the error using as, like this:

except Exception as e:
    print(e)

# The default behavior of print is that it will print the string representation of whatever object is passed to it. In this case, it will print the error message.



#===============================================================================

#Basic Types
character_name: str = "Sir Galahad"
character_level: int = 7
character_health: float = 72.5
has_magic: bool = True

#Function Parameters with type
def get_character_status(name: str, level: int, health: float, has_magic: bool):
    status = f"{name} is level {level} with {health} HP"

    if has_magic:
        status += ", and can cast spells"
    else:
        status += ", and cannot cast spells"

    return status


#Return Type Annotations
def get_item_description(item_name: str, damage: int, is_magical: bool)-> str:
    description = f"{item_name} deals {damage} damage"

    if is_magical:
        description += " and glows with arcane power"
    else:
        description += " and has no magical properties"

    return description


# List and Set Hints
character_items: list[str] = ["Sword", "Shield", "Potion"]
magic_spells: set[str] = {"Fireball", "Ice Bolt", "Lightning Strike"}


#Dictionary Hints
character_stats: dict[str, int] = {
    "strength": 15,
    "dexterity": 12,
    "intelligence": 14
}

# Tuple Hints
character_position: tuple[float, float] = (10.5, 20.3)
stats: tuple[int, float, int] = (100, 42.5, 75)


#Nested Types
character_spells: dict[str, list[str]] = {
    "Gandalf": ["Fireball", "Light"],
    "Frodo": ["Hide"],
}

#Optional Types
damage_bonus: int | None = None  # This variable can be an int or None
def summon_mount(has_mount: bool, distance: int)-> str | None:
    if not has_mount:
        return None

    if distance > 420:
        return None

    return "Battle Horse"


