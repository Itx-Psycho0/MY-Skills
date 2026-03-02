# Classes
# A class is a special type in an object-oriented programming language like Python. If you squint really hard, it's kinda like a dictionary in that it usually stores name-value pairs:

# Defines a new class called "Soldier"
# with three properties: health, armor, damage
class Soldier:
    health = 5
    armor = 3
    damage = 2

# Just like a string, integer or float, a class is a type, but instead of being a built-in type, classes are custom types that you define.


#===========================================================

# Objects
# So if a class is a new custom type, what's an object? Objects are just instances of a class.

# Yeah I know, "instance" is another fancy programming word. It just means "an example of" or "a specific case of". For example, "Lane is an instance of a human" or "My Chemical Romance is an instance of a band".

# For example:

health = 50
# health is an instance of an integer type
aragorn = Soldier()
# aragorn is an instance of the Soldier class type

# Each new instance of a class is an "object".

# Example
class Archer:
    health = 40
    arrows = 10

# Create several instances of the Archer class
legolas = Archer()
bard = Archer()

# Print class properties
print(legolas.health) # 40
print(bard.arrows) # 10



#===========================================================


# Methods
# So you might be wondering why classes are useful, they're like dictionaries... but worse... Right?

# Well, no. First of all, classes provide structure. The class definition says "hey, I have these specific properties". A dictionary is more powerful in the sense that you can store whatever you want in it, but that also makes it less clear what on earth is in there at any given time.

# Another thing that makes classes useful is that they can have methods! A method is just a function that's tied directly to a class and has access to its properties. See the take_damage method here:

class Soldier:
    health = 5

    # This is a method that reduces the
    # health of the soldier
    def take_damage(self, damage):
        self.health -= damage

soldier_one = Soldier()
soldier_one.take_damage(2)
print(soldier_one.health)
# prints "3"

soldier_two = Soldier()
soldier_two.take_damage(1)
print(soldier_two.health)
# prints "4"


#===========================================================

# Self
# Methods are defined within the class declaration. Their first parameter is always the instance of the class that the method is being called on. By convention, it's called "self", and because self is a reference to the object, you can use it to read and update the properties of the object.

# Notice that methods are called directly on an object instance using the dot operator:

# my_object.my_method()



#===========================================================

# Methods Can Return
# If a normal function doesn't return anything, it's typically not a very useful function. In contrast, methods often don't return anything because they can mutate (update) the properties of the object instead. That's exactly what we did in the last assignment.

# However, they can return values if you want! They're just functions with access to an object, after all. A common use case is a "getter" method that returns a calculated value based on the properties of the object.

class Soldier:
    armor = 2
    num_weapons = 2

    def get_speed(self):
        speed = 10
        speed -= self.armor
        speed -= self.num_weapons
        return speed

soldier_one = Soldier()
print(soldier_one.get_speed())
# prints "6"


#===========================================================


# Methods vs. Functions
# You know what a function is, and a method is the exact same thing, it's just tied directly to a class and has access to the properties of the object.

# A method automagically receives the object it was called on as its first parameter:

class Soldier:
    health = 100

    def take_damage(self, damage, multiplier):
        # "self" is dalinar in the first example
        #
        damage = damage * multiplier
        self.health -= damage

dalinar = Soldier()
# "damage" and "multiplier" are passed explicitly as arguments
# 20 and 2, respectively
# "dalinar" is passed implicitly as the first argument, "self"
dalinar.take_damage(20, 2)
print(dalinar.health)
# 60

adolin = Soldier()
# Again, "adolin" is passed implicitly as the first argument, "self"
# "damage" and "multiplier" are passed explicitly as arguments
adolin.take_damage(10, 3)
print(adolin.health)
# 70

# A method can operate on data that is contained within the class. In other words, you won't always see all the "outputs" in the return statement because the method might just mutate the object's properties directly.

# The OOP Debate
# Because functions are more explicit, some developers argue that functional programming is better than object-oriented programming. Neither paradigm is "better" (I'm required to say this as an educator). The best developers learn and understand both styles and use them as they see fit.

# While methods are more implicit (an object's properties are changed from within), they also make it easier to group a program's data and behavior in one place, which can lead to a more organized codebase. It's tradeoffs all the way down.


#===========================================================

# Constructors
# I have a confession... I've been teaching you the bad way to define properties on a class... oopsie!


# It's rare in the real world to see a class that defines properties like this (as we did):

class Soldier:
    name = "Legolas"
    armor = 2
    num_weapons = 2

# A constructor is (usually) better. It's a specific method on a class called __init__ that is called automatically when you create a new instance of a class.

# So, using a constructor, the code from above would look like this:

class Soldier:
    def __init__(self):
        self.name = "Legolas"
        self.armor = 2
        self.num_weapons = 2

# Not only is this safer (we'll talk about why later), but it also allows us to make the starting property values configurable:

class Soldier:
    def __init__(self, name, armor, num_weapons):
        self.name = name
        self.armor = armor
        self.num_weapons = num_weapons

soldier_one = Soldier("Legolas", 2, 10)
print(soldier_one.name)
# prints "Legolas"
print(soldier_one.armor)
# prints "2"
print(soldier_one.num_weapons)
# prints "10"

soldier_two = Soldier("Gimli", 5, 1)
print(soldier_two.name)
# prints "Gimli"
print(soldier_two.armor)
# prints "5"
print(soldier_two.num_weapons)
# prints "1"



