# Revision

def total_xp(level,xp_to_add):
    if level < 1:
        return "Level must be at least 1"
    if xp_to_add < 0:
        return "XP to add must be non-negative"
    
    total_xp = 0
    for i in range(1, level + 1):
        total_xp += i * 100
    
    total_xp += xp_to_add
    return total_xp

# Test cases
print(total_xp(1, 50))  # Expected output: 150
print(total_xp(2, 150)) # Expected output: 450
print(total_xp(3, 200)) # Expected output: 900
print(total_xp(0, 100)) # Expected output: "Level must be at least 1"
print(total_xp(2, -50)) # Expected output: "XP to add must be non-negative"

