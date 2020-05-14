def myfunc(n):
    return lambda a: a * n


mydoubler = myfunc(2)

print(mydoubler(11))

print((lambda multiplier, number, exponent: multiplier * number**exponent)(2, 2, 3))
