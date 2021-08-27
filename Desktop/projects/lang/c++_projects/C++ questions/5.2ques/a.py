char_str = None
upper=0
lower=0
number=0
special=0 


while char_str !="*":
   char_str = input("Input an symbol (* terminates):")
   str=char_str
   for str in char_str: 
        if char_str.isupper():
            upper += 1
        elif char_str.islower():
            lower += 1
        elif char_str.isdigit():
            number += 1
        elif char_str=="*":
            break
        else:
            special += 1


print("")
print("upper:", upper)
print("lower:", lower)
print("number:", number)
print("special:", special)