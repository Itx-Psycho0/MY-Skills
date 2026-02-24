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