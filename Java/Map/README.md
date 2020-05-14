### Maps & HashMaps

Creates a key value pair. Maps are fast. HashMap is unordered and contains only unique keys. TreeMap is sorted, contains unique keys, and keys must be same data type. LinkedHashMap keeps the order you add items to it.

```Java
  Map m = new HashMap();
  m.clear();
  m.isEmpty();
  m.put("Kary", 5); // m.put(key, value), adding key and value to maps.
  m.put("Megan", "N");
  m.put("Wilson", 1);
  m.get("Kary") // m.get(key), will return value. If not found will return null.

  m.containsValue(5); // m.containsValue(value), returns true or false if map contains value.
  m.containsKey("Kary"); // m.containsValue(key), returns true or false if map contains key.

  m.values(); // will return all values in map.

  System.out.print(m)
  // {Kary=5, Megan=N, Wilson=1}
```