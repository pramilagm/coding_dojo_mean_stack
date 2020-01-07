import random
def lottery():
    # returns 6 numbers between 1 and 40
    for i in range(6):
        # yield random.randint(1, 40)
        yield random.randint(1,15)


for number in lottery():
       print("And the next number is... %d!" %(number))