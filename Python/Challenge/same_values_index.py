def same_values(lst1, lst2):
    newList = []
    for i in range(len(lst1)):
        if lst1[i] == lst2[i]:
            newList.append(i)

    return newList


print(same_values([5, 1, -10, 3, 3], [5, 10, -10, 3, 5]))
