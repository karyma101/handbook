def odd_indices(lst):
  newList = []
  for i in range(len(lst)):
    if i % 2 == 1:
      newList.append(lst[i])
  return newList

print(odd_indices([4, 3, 7, 10, 11, -2]))