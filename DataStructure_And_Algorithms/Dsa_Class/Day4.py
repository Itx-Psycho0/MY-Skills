#frquency
str = 'vvvvvvvvvarunnnnn'
freq={}
for i in str:
    freq[i] = freq.get(i,0)+1
print(freq)


#given a string find the  first non repeating character
str = 'vvvvvvvarunnnnn'
freq={}
res = ""
for i in str:
    freq[i] = freq.get(i,0)+1
    
for i in str:
    if freq[i] == 1:
        res = i
        break
print(res)

# using queue
from collections import deque
str = 'vvvvvvvarunnnnn'
freq={}
q = deque()
res = ""
for i in str:
    freq[i] = freq.get(i,0)+1
    q.append(i)
    while q and freq[q[0]] > 1:
        q.popleft()
    if q:
        res = q[0]
        break
print(res)



from collections import deque
class stack:
    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()
    
    def append(self, x):
        self.q1.append(x)
        for i in range(len(self.q1)-1):
            self.q1.append(self.q1.popleft())
    
    def pop(self):
        return self.q1.popleft()
    

    # def pop(self):
    #     if not self.q1:
    #         return None
    #     while len(self.q1) > 1:
    #         self.q2.append(self.q1.popleft())
    #     res = self.q1.popleft()
    #     self.q1, self.q2 = self.q2, self.q1
    #     return res

    
s = stack()
s.append(1)
s.append(2)
s.append(3)
print(s.pop())
print(s.pop())
print(s.pop())
print(s.pop())
print(s.pop())
    