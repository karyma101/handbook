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

Similar to an array but it can change sizes and is slower.

```Java
  ArrayList<Integer> t = new ArrayList<Integer>();
  t.add(1);



  System.out.println();
```