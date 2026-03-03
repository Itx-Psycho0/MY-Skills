# Encapsulation

# Encapsulation is the practice of hiding complexity inside a "black box" so that it's easier to focus on the problem at hand.



# The simplest example of encapsulation is a function. The caller of a function doesn't need to worry too much about what happens inside, they just need to understand the inputs and outputs.

# who even knows how this function works???
# I sure don't, I just call it and assume
# it calculates the acceleration correctly
# acceleration = calc_acceleration(initial_speed, final_speed, time)

# To use the calc_acceleration function, we don't need to think about each line of code inside the function definition. We just need to know that if we give it the inputs:

# initial_speed
# final_speed
# time
# It will produce the correct acceleration as an output.




#=================================================================


# Public and Private
# By default, all properties and methods in a class are public. That means that you can access them with the . operator:

# wall.height = 10
# print(wall.height)
# # 10

# Private data members are a way to encapsulate logic and data within a class definition. To make a property or method private just prefix it with two underscores:

class Wall:
    def __init__(self, armor, magic_resistance):
        self.__armor = armor
        self.__magic_resistance = magic_resistance

    def get_defense(self):
        return self.__armor + self.__magic_resistance

front_wall = Wall(10, 20)

# This results in an error
print(front_wall.__armor)

# This works
print(front_wall.get_defense())
# 30

# We do this to make it easier to use our class. Now when another developer (or even ourselves) use the Wall class, they don't need to think about how armor and magic_resistance affect the defense of a Wall. In fact, we don't even allow them to access armor and magic_resistance directly by making them private with __.

# They simply call the public get_defense() method and know that the correct value will be returned.

# Note that you won't need to understand all the details behind this, but Python "private" members aren't truly private. Python just changes their names with "name mangling" to make outside access less straightforward.



# Encapsulation and the concepts of private and public members have NOTHING to do with security. This really confused me as a new developer. Just as the casing on your computer hides its inner workings but doesn't stop you from opening the case and looking inside, encapsulation doesn't stop anyone from knowing how your code works, it just puts it all in one easy to find place.



#=================================================================

# Practice Encapsulation
class BankAccount:
    def __init__(self, account_number, initial_balance):
        self.__account_number = account_number
        self.__balance = initial_balance

    def get_account_number(self):
        return self.__account_number

    def get_balance(self):
        return self.__balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("cannot deposit zero or negative funds")
        self.__balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("cannot withdraw zero or negative funds")
        
        if amount > self.__balance:
            raise ValueError("insufficient funds")
        
        self.__balance -= amount