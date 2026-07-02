#Classes
#A class is a special type in an object-oriented programming language like Python. If you squint really hard, it's kinda like a dictionary in that it usually stores name-value pairs:

class Wall:
    armor : int = 10
    # height: int = 5 # properties are variables that belong to a class. They are defined inside the class and can be accessed using the dot notation. In this example, the Wall class has two properties: armor and height.


    def __init__(self, depth: int, height: int, width: int) -> None:
        self.depth=depth
        self.height=height
        self.width=width
        self.volume=height*depth*width

    def fortify(self) -> None: # Methods are functions that belong to a class. They are defined inside the class and can access its attributes and other methods. The self parameter is a reference to the current instance of the class, allowing you to access its attributes and methods.
        self.armor*=2  

    def get_cost(self) -> int:
        return self.armor*self.height       

class BatteringRam:
    damage: int = 2
    length: int = 4


#Practice
class Archer:
    def __init__(self, name: str, health: int, num_arrows: int) -> None:
        self.name=name
        self.health=health
        self.num_arrows=num_arrows

    def take_hit(self) -> None:
        if(self.health<=0):
            raise Exception(f"{self.name} is dead")
        self.health-=1

    def shoot(self, target: "Archer") -> None:
        if self.health <= 0:
            raise Exception(f"{self.name} is dead")
    
        if self.num_arrows <= 0:
            raise Exception(f"{self.name} can't shoot")
    
        self.num_arrows -= 1
        print(f"{self.name} shoots {target.name}")
        target.take_hit()

    # don't touch below this line

    def get_status(self) -> tuple[str, int, int]:
        return self.name, self.health, self.num_arrows

    def print_status(self) -> None:
        print(f"{self.name} has {self.health} health and {self.num_arrows} arrows")



#private attributes
#In Python, private attributes are not truly private, but they are intended to be used only within the class. By convention, private attributes are prefixed with an underscore (_). This indicates to other programmers that these attributes should not be accessed directly from outside the class. However, it is still possible to access them if needed, but it is generally discouraged. 
class Wizard:
    def __init__(self, name: str, stamina: int, intelligence: int) -> None:
        self.name=name
        self.__stamina=stamina
        self.__intelligence=intelligence
        self.health=100*stamina
        self.mana=10*intelligence