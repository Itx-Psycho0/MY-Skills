#Classes
#A class is a special type in an object-oriented programming language like Python. If you squint really hard, it's kinda like a dictionary in that it usually stores name-value pairs:

class Wall:
    armor : int = 10
    height: int = 5 # properties are variables that belong to a class. They are defined inside the class and can be accessed using the dot notation. In this example, the Wall class has two properties: armor and height.

    def fortify(self) -> None: # Methods are functions that belong to a class. They are defined inside the class and can access its attributes and other methods. The self parameter is a reference to the current instance of the class, allowing you to access its attributes and methods.
        self.armor*=2         

class BatteringRam:
    damage: int = 2
    length: int = 4