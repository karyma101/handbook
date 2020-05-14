# Updating a tuple
people = ('Bob', 'Mary')
people_list = list(people)
people_list[1] = 'Sarah'
people = tuple(people_list)
print(people)
