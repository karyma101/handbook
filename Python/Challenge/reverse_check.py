def reversed_list(lst1, lst2):
    i = 0
    while i < len(lst1):
        if lst1[i] != lst2[-i - 1]:
            return False
        i += 1

    return True


print(reversed_list([1, 2, 3], [3, 2, 1]))
print(reversed_list([1, 5, 3], [3, 2, 1]))
