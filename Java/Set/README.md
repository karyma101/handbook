## Set 

A HashSet is an unordered list of unique items. TreeSet ordered list of unique items. LinkedHashSet

```Java
  //Sets
  Set<Integer> t = new HashSet<Integer>();

  t.clear();
  t.add(5);
  t.add(7);
  t.add(5);
  t.add(9);
  t.add(-8);

  t.remove(9);
  t.isEmpty();
  t.size();
  t.contains(5);

  System.out.println(t);
  // [5, 7, -8]
```

## List

ArrayList is similar to an array but it can change sizes and is slower. LinkedList 

```Java
  ArrayList<Integer> t = new ArrayList<Integer>();
  t.add(1);
  t.get(1); // t.get(index), gets element at index
  t.set(0, 5); // t.set(index, element), sets an element at index and must have an existing item at index position
  t.subList(1, 3); // t.subList(start, end), gets elements from array between start and end
  t.size();
  t.empty();


  System.out.println(t);
```