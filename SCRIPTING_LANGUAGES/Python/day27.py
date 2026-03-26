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



