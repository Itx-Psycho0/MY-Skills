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




#Abstraction
#Abstraction is a fundamental concept in object-oriented programming that focuses on simplifying complex systems by modeling classes based on the essential properties and behaviors of the objects they represent. It allows programmers to hide unnecessary implementation details and expose only the relevant features of an object, making it easier to understand and work with. In Python, abstraction can be achieved through the use of abstract classes and interfaces, which define a blueprint for other classes to follow without providing a complete implementation.


class Human:
    def sprint_right(self) -> None:
        self.__raise_if_cannot_sprint()
        self.__use_sprint_stamina()
        self.move_right()
        self.move_right()

    def sprint_left(self) -> None:
        self.__raise_if_cannot_sprint()
        self.__use_sprint_stamina()
        self.move_left()
        self.move_left()

    def sprint_up(self) -> None:
        self.__raise_if_cannot_sprint()
        self.__use_sprint_stamina()
        self.move_up()
        self.move_up()

    def sprint_down(self) -> None:
        self.__raise_if_cannot_sprint()
        self.__use_sprint_stamina()
        self.move_down()
        self.move_down()

    def __raise_if_cannot_sprint(self) -> None:
        if self.__stamina <= 0:
            raise Exception("not enough stamina to sprint")

    def __use_sprint_stamina(self) -> None:
        self.__stamina -= 1

    # don't touch below this line

    def move_right(self) -> None:
        self.__pos_x += self.__speed

    def move_left(self) -> None:
        self.__pos_x -= self.__speed

    def move_up(self) -> None:
        self.__pos_y += self.__speed

    def move_down(self) -> None:
        self.__pos_y -= self.__speed

    def get_position(self) -> tuple[int, int]:
        return self.__pos_x, self.__pos_y

    def __init__(self, pos_x: int, pos_y: int, speed: int, stamina: int) -> None:
        self.__pos_x = pos_x
        self.__pos_y = pos_y
        self.__speed = speed
        self.__stamina = stamina



#Inheritance
#Inheritance is a fundamental concept in object-oriented programming that allows a class (called a child or subclass) to inherit properties and behaviors (attributes and methods) from another class (called a parent or superclass). This promotes code reusability and establishes a hierarchical relationship between classes. In Python, inheritance is implemented by defining a new class that specifies the parent class in parentheses after the class name. The child class can then access and override the attributes and methods of the parent class, while also adding its own unique features.

class Human:
    def __init__(self, name: str) -> None:
        self.__name = name

    def get_name(self) -> str:
        return self.__name


## don't touch above this line


class Archer(Human):
    def __init__(self, name: str, num_arrows: int) -> None:
        super().__init__(name)
        self.__num_arrows=num_arrows

    def get_num_arrows(self) -> int:
        return self.__num_arrows
    


#Multiple Children
class Hero:
    def __init__(self, name: str, health: int) -> None:
        self.__name = name
        self.__health = health

    def get_name(self) -> str:
        return self.__name

    def get_health(self) -> int:
        return self.__health

    def take_damage(self, damage: int) -> None:
        self.__health -= damage


class Archer(Hero):
    def __init__(self, name: str, health: int, num_arrows: int) -> None:
        super().__init__(name, health)
        self.__num_arrows = num_arrows

    def shoot(self, target: Hero) -> None:
        if self.__num_arrows <= 0:
            raise Exception("not enough arrows")
        self.__num_arrows -= 1
        target.take_damage(10)




class Wizard(Hero):
    def __init__(self, name: str, health: int, mana: int) -> None:
        super().__init__(name, health)
        self.__mana = mana

    def cast(self, target: Hero) -> None:
        if self.__mana < 25:
            raise Exception("not enough mana")

        self.__mana -= 25
        target.take_damage(25)





#Polymorphism
#Polymorphism is a fundamental concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (data types or classes), allowing for more flexible and reusable code. In Python, polymorphism is achieved through method overriding, where a subclass provides a specific implementation of a method that is already defined in its superclass. This allows the same method name to be used for different types of objects, and the appropriate method is called based on the object's actual class at runtime.



#Operator Overloading
class Sword:
    def __init__(self, sword_type: str) -> None:
        self.sword_type = sword_type

    def __add__(self, other: "Sword") -> "Sword":
        if self.sword_type == "bronze" and other.sword_type == "bronze":
            return Sword("iron")

        if self.sword_type == "iron" and other.sword_type == "iron":
            return Sword("steel")

        raise Exception("cannot craft")
    


#Practice
SUITS: list[str] = ["Clubs", "Diamonds", "Hearts", "Spades"]

RANKS: list[str] = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
]


class Card:
    def __init__(self, rank: str, suit: str) -> None:
        self.rank = rank
        self.suit = suit
        self.rank_index = RANKS.index(rank)
        self.suit_index = SUITS.index(suit)

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Card):
            return False
        return (
            self.rank_index == other.rank_index
            and self.suit_index == other.suit_index
        )

    def __lt__(self, other: "Card") -> bool:
        if self.rank_index != other.rank_index:
            return self.rank_index < other.rank_index
        return self.suit_index < other.suit_index

    def __gt__(self, other: "Card") -> bool:
        if self.rank_index != other.rank_index:
            return self.rank_index > other.rank_index
        return self.suit_index > other.suit_index

    def __str__(self) -> str:
        return f"{self.rank} of {self.suit}"


class Round:
    def resolve_round(self) -> int:
        raise Exception("not implemented")


class HighCardRound(Round):
    def __init__(self, card1: Card, card2: Card) -> None:
        self.card1 = card1
        self.card2 = card2

    def resolve_round(self) -> int:
        if self.card1 > self.card2:
            return 1
        if self.card2 > self.card1:
            return 2
        return 0


class LowCardRound(Round):
    def __init__(self, card1: Card, card2: Card) -> None:
        self.card1 = card1
        self.card2 = card2

    def resolve_round(self) -> int:
        if self.card1 < self.card2:
            return 1
        if self.card2 < self.card1:
            return 2
        return 0