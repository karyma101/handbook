def add_greetings(names):
  newList = ["Hello, " + name for name in names]
  return newList

print(add_greetings(["Owen", "Max", "Sophie"]))