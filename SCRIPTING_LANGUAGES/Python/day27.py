# Polymorphism 

# The Greek roots of the word "polymorphism" are:

#     "poly" means "many".
#     "morph" means "to change" or "form".

# Polymorphism in programming is the ability to present the same interface (function or method signatures) for many different underlying forms (data types).

# A classic example is a Shape class that Rectangle, Circle, and Triangle can inherit from. Each has different underlying data:

#     The circle needs its center point coordinates and radius
#     The rectangle needs two coordinates for the top left and bottom right corners
#     The triangle needs coordinates for the corners

# Polymorphism is where each type is responsible for its own data and code, but still adheres to the same interface, in this case a simple method "signature":

def draw_shape(self):

# So now we can treat shapes as the same even though they are different. It hides the complexities of the difference behind a clean abstraction.

    shapes = [Circle(5, 5, 10), Rectangle(1, 3, 5, 6)]
    for shape in shapes:
        print(shape.draw_shape())

# What Is a Function Signature?

# A function signature (or method signature) includes the name, inputs, and outputs of a function or method. For example, hit_by_fire in the Human and Archer classes have identical signatures.

class Human:
    def hit_by_fire(self):
        self.health -= 5
        return self.health

class Archer:
    def hit_by_fire(self):
        self.health -= 10
        return self.health

# Both methods have the same name, take no additional inputs, and return integers. If any of those things were different, they would have different function signatures. Here are methods with different signatures:

class Human:
    def hit_by_fire(self):
        self.health -= 5
        return self.health

class Archer:
    def hit_by_fire(self, dmg):
        self.health -= dmg
        return self.health

# Operator Overloading
# Another kind of built-in polymorphism in Python is the ability to override how an operator works. For example, the + operator works for built-in types like integers and strings.

print(3 + 4)
# 7

print("three " + "four")
# three four

# Custom classes on the other hand don't have any built-in support for those operators:

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


p1 = Point(4, 5)
p2 = Point(2, 3)
p3 = p1 + p2
# TypeError: unsupported operand type(s) for +: 'Point' and 'Point'

# But we can add our own support! If we create an __add__(self, other) method on our class, the Python interpreter will use it when instances of the class are being added with the + operator. The name of the second parameter (other in this example) is just a convention - you can use any valid parameter name. Here's an example:

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        x = self.x + other.x
        y = self.y + other.y
        return Point(x, y)

p1 = Point(4, 5)
p2 = Point(2, 3)
p3 = p1 + p2
# p3 is (6, 8)

# Now, when p1 + p2 is executed, under the hood the Python interpreter just calls p1.__add__(p2).

# Overriding Built-In Methods
# Last but not least, let's take a look at some of the built-in methods we can override in Python. While there isn't a default behavior for the arithmetic operators like we just saw, there is a default behavior for printing a class instance:

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


p1 = Point(4, 5)
print(p1)
# prints "<Point object at 0xa0acf8>"

# That's not super useful! We probably want to see the fields!

# Let's teach our Point class to print itself. The __str__ method (short for "string") lets us do just that. It takes no inputs but returns a string that will be printed to the console when someone passes an instance of the class to Python's print() function.

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x},{self.y})"

p1 = Point(4, 5)
print(p1)
# prints "(4,5)"

# The __repr__ method works similarly: the difference is that it's intended for use in debugging by developers, rather than in printing strings to end users.

