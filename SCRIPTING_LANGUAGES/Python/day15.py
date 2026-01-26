# Day 15
# Global Interpreter Lock (GIL)

from multiprocessing import Process
import threading
import time

def brew_chai():
    print(f"{threading.current_thread().name} started")
    count = 0
    for _ in range(100000000):
        count += 1
    print(f"{threading.current_thread().name} done")

t1 = threading.Thread(target=brew_chai, name="Thread 1")
t2 = threading.Thread(target=brew_chai, name="Thread 2")

start = time.time()

t1.start()
t2.start()

t1.join()
t2.join()

end = time.time()
print("Done")
print(f"Took {end-start:.2f} seconds")

def crunch_number():
    print(f"Started the count process")
    count = 0
    for _ in range(100000000):
        count += 1
    print(f"Finished the count process")

if __name__ == "__main__":
    st = time.time()


    p1 = Process(target=crunch_number)
    p2 = Process(target=crunch_number)

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    print("Done")

    ed = time.time()
    print(f"Took {ed-st:.2f} seconds")