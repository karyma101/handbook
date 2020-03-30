def exponents(bases, powers):
  newList = []
  
  for el in bases:
    for i in range(len(powers)):
      newList.append(el ** powers[i])
      
  return newList

print(exponents([2, 3, 4], [1, 2, 3]))