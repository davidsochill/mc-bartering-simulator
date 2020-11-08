import random

PEARL_DROP = 0.0442
LOOP_AMOUNT = 100000
GOLD_AMOUNT = 12

total_pearl_drops = 0
over_twelve = 0

for i in range(0, LOOP_AMOUNT):
    pearl_drops = 0

    for j in range(0, GOLD_AMOUNT):            
        rand = random.random()

        if rand < PEARL_DROP:
            pearl_drops += random.randint(4, 8)
            
    if pearl_drops >= 12:
        over_twelve += 1

    total_pearl_drops += pearl_drops


print(total_pearl_drops / LOOP_AMOUNT)
print(over_twelve / LOOP_AMOUNT)