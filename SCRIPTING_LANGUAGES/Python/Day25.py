# Abstraction
# Abstraction helps us handle complexity by hiding unnecessary details.

# ... which sounds just like encapsulation, right? To be honest, the ideas are so similar that it's almost not worth worrying about the difference...almost.

# Abstraction vs. Encapsulation
# Abstraction is about creating a simple interface for complex behavior. It focuses on what's exposed (public).
# Encapsulation is about hiding internal state. It focuses on tucking away the implementation details (private).


# Abstraction is more about reducing complexity, encapsulation is more about maintaining the integrity of system internals.

# In my personal opinion, it's a bit of a distinction without a difference... but "abstraction" is a more broadly used term, and in my view at least, it's also a more general term for "making something easier to use by adding a layer on top".

# Are We Encapsulating or Abstracting?
# Both. We are almost always doing both. Here's an example of using the random library to generate a random number:

import random

attack_damage = random.randrange(5)

# Generating random numbers is a really hard problem. The operating system uses the physical hardware of the computer to create a seed for the randomness. However, the developers of the random library have abstracted that complexity away and encapsulated it within the simple randrange function. We just say "I want a random number from 0 to 4" and the library does it.

# When writing libraries for other developers to use, getting the abstractions right is critical because changing them later can be disastrous. Imagine if the maintainers of the random module changed the input parameters to the randrange function! It would break code used by thousands of applications around the world.


class Human:
    def __init__(self, pos_x, pos_y, speed):
        self.__pos_x = pos_x
        self.__pos_y = pos_y
        self.__speed = speed

    def move_right(self):
        self.__pos_x += self.__speed

    def move_left(self):
        self.__pos_x -= self.__speed

    def move_up(self):
        self.__pos_y += self.__speed

    def move_down(self):
        self.__pos_y -= self.__speed

    def get_position(self):
        return self.__pos_x, self.__pos_y
    

# The terms "abstraction" and "encapsulation" mostly just emphasize different aspects of the same concept:

# Abstraction focuses on exposing essential features while hiding complexity
# Encapsulation focuses on bundling data with methods and restricting direct access to implementation details



# How OOP Developers Think
# Classes in object-oriented programming are all about grouping data and behavior together in one place: an object. Object-oriented programmers tend to think about programming as a modeling problem. They think:

# "How can I write a Human class that holds the data and simulates the behavior of a real human?"

# To provide some contrast, when functional programmers aren't busy writing white papers, they tend to think of their code as inputs and outputs, and how those inputs and outputs transition the world from one state to the next:

# "My game has 7 humans in it. When one takes a step, what's the next state of the game?"



# Both Paradigms Are Useful
# OOP isn't the only pattern for organizing code, but it's one of the more popular ones. If you understand multiple ways of thinking about code, you'll be a much better developer overall.




# Practice Abstraction

class DeckOfCards:
    SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"]
    RANKS = [
        "Ace",
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
    ]

    def __init__(self):
        self.__cards = []
        self.create_deck()

    def create_deck(self):
        for suit in self.SUITS:
            for rank in self.RANKS:
                self.__cards.append((rank, suit))

    def shuffle_deck(self):
        random.shuffle(self.__cards)

    def deal_card(self):
        if len(self.__cards) == 0:
            raise ValueError("No more cards in the deck")
        return self.__cards.pop()

    # don't touch below this line

    def __str__(self):
        return f"The deck has {len(self.__cards)} cards"
    
deck = DeckOfCards()
print(deck)
deck.shuffle_deck()
print(deck)
print(deck.deal_card())
print(deck)
print(deck.deal_card())
print(deck)