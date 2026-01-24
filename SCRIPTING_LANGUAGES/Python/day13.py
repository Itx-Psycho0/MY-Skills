# Day 13
# OOPS
class Chai:
    temperature = "hot"
    strength = "medium"
    origin = 'India'

print(Chai.origin)
Chai.is_hot= True
print(Chai.is_hot)

print(type(Chai))

ginger = Chai()
print(type(ginger))
print(type(ginger)is Chai)


masala = Chai()
print(masala.origin)
print(ginger.origin)

masala.is_hot = False
print(masala.is_hot)
print(ginger.is_hot)
masala.flavour = "masala"
print(masala.flavour)


# Namespaces
# SO each obj have own namespace 


# Attributing shadowing

# variable in class called in attributes

cutting = Chai()
print(cutting.temperature)
cutting.temperature = "cold"
print(cutting.temperature)
print(Chai.temperature)

del cutting.temperature
print(cutting.temperature)
print(Chai.temperature)
cutting.cup = "small"
print(cutting.cup)

# del cutting.cup
# print(cutting.cup) IT THROWS A ERROR - AttributeError: 'Chai' object has no attribute 'cup' 

# self keyword
class chai:
    size = 150
    def desc(self):
        return self.size
    
cup = chai()
print(cup.desc())
print(cup.size)

print(chai.desc(cup))
# without cup it throw error bcz we have to describe for what we use this method if we use method with class

# Contructor and init 
class ChaiOrder:
    def __init__(self, type_, size):
        self.type = type_
        self.size = size

    def summary(self):
        return self.size , self.type

order = ChaiOrder("masala",200)
print(order.summary())
print(order.type)
print(order.size)


# inheritance and Composition
class BaseChai:
    def __init__(self,type_):
        self.type = type_

    def prepare(self):
        print(f"Preparing {self.type}")      

class MasalaChai(BaseChai):
    def add_spices(self):
        print("Adding cloves")

# composition 
class ChaiShop:
    chai_cls = BaseChai
    def __init__(self):
        self.chai = self.chai_cls("masala")

    def order(self):
        print(f"Ordering {self.chai.type}")
        self.chai.prepare()

shop = ChaiShop()
shop.order()
shop.chai_cls = MasalaChai
shop.order()

# Access Base Class

# code duplication
class Bc:
    def __init__(self,type_):
        self.type = type_

    def prepare(self):
        print(f"Preparing {self.type}")

# class Gc(Bc):
#     def __init__(self,type_, name):
#         self.type = type_
#         self.name = name

#Explicit call
# class Gc(Bc):
#     def __init__(self,type_, name):
#         Bc.__init__(self,type_)
#         self.name = name

# Super()
class Gc(Bc):
    def __init__(self,type_, name):
        super().__init__(type_)
        self.name = name



# Method Resolution Order - MRO

class A:
    label = "A"

class B(A):
    label = "B"

class C(A):
    label = "C"


class D(B,C):
    pass

print(D.mro())
print(D.label)
print(D.__mro__)
print(D.__bases__)
print(D.__subclasses__())

#static Method
