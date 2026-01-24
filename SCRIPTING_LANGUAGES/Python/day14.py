# Day 14
# thread concurrency

# concurrency and parallelism :-
# Concurrency is about managing multiple tasks to make progress on them over overlapping time, often by switching between them (like a single cashier), while parallelism is about executing multiple tasks simultaneously, requiring multiple processors/cores (like multiple cashiers) for true simultaneous work

from multiprocessing import Process
import threading
import time

# Threading
def take_orders():
    for i in range(1,4):
        print(f"Taking order for #{i}")
        time.sleep(1)

def brew():
    for i in range(1,4):
        print(f"Brewing order for #{i}")
        time.sleep(1)



# creating a thread
t1 = threading.Thread(target=take_orders)
t2 = threading.Thread(target=brew)

# starting a thread
t1.start()
t2.start()

# wait for both to finish
t1.join()
t2.join()

print(f"Done")


# Multiprocessing 
def make():
    for i in range(1,4):
        print(f"Making order for #{i}")
        time.sleep(3)


if __name__ == "__main__":
    chai_makers = [
        Process(target=make, args=(f"Chai #{i+1}"))
        for i in range(3)
    ]

# p1 = Process(target=take_orders)
# p2 = Process(target=make)

for p in chai_makers:
    p.start()

for p in chai_makers:
    p.join()



print(f"Done")
