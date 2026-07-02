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




#Encapsulation
#Encapsulation is a fundamental concept in object-oriented programming that refers to the bundling of data (attributes) and methods (functions) that operate on that data into a single unit, known as a class. It restricts direct access to some of the object's components, which can prevent the accidental modification of data and promote modularity and maintainability in code. In Python, encapsulation is achieved through the use of access modifiers, such as public, protected, and private attributes and methods.

#private attributes
#In Python, private attributes are not truly private, but they are intended to be used only within the class. By convention, private attributes are prefixed with an underscore (_). This indicates to other programmers that these attributes should not be accessed directly from outside the class. However, it is still possible to access them if needed, but it is generally discouraged. 
class Wizard:
    def __init__(self, name: str, stamina: int, intelligence: int) -> None:
        self.name=name
        self.__stamina=stamina
        self.__intelligence=intelligence
        self.health=100*stamina
        self.mana=10*intelligence


#Practice
class BankAccount:
    def __init__(self, account_number: str, initial_balance: float) -> None:
        self.__account_number = account_number
        self.__balance = initial_balance

    def get_account_number(self) -> str:
        return self.__account_number

    def get_balance(self) -> float:
        return self.__balance

    def deposit(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("cannot deposit zero or negative funds")
        self.__balance += amount

    def withdraw(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("cannot withdraw zero or negative funds")
        if amount > self.__balance:
            raise ValueError("insufficient funds")
        self.__balance -= amount