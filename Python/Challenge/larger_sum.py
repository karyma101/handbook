def larger_sum(lst1, lst2):
  sum1 = 0
  sum2 = 0
  for el in lst1:
    sum1 += el
  for el in lst2:
    sum2 += el
  
  if sum1 == sum2:
    return lst1
  elif sum1 < sum2:
    return lst2
  else:
    return lst1


print(larger_sum([1, 9, 5], [2, 3, 7]))