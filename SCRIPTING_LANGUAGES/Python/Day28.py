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




