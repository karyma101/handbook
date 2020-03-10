# Java

Java is an object oriented static typed language.

## Data Types
Primitive Data types, unchangable
- int : Whole numbers, holds positive, negative numbers and zero
- double: Holds decimal numbers. The maximum value is 1.797,693,134,862,315,7 E+308, which is approximately 17 followed by 307 zeros. The minimum value is 4.9 E-324, which is 324 decimal places
- float : floating decimal point
- boolean : true or false
- char : a single character must be surrounded by single quotations
- String: stores multiple characters using double quotations

## Comments
- // : Single-line Comments
- /* */ : Multi-line Comments

## Operators
- < : less than
- \> : greater than
- != : not equal to
- == : equal to
- && : and
- || : or

### Comparing Strings

stringVariable.equals("string")

### If Statements

```Java
if() {
} else if {

} else {

}
```

### Array
```Java
// x speciify max length of array
String[] names = new String[x];

int[] nums = {1,2,3,4,5};

names[2] = "kary";
```

### Loops
```Java
for(int i = 0; i <= arr.length; i++){
}

// For each loops through all elements in an array, same as above
int counter = 0;
for(int element: arr){
  counter++;
}

while(x != 10) {

}

do {

} while ();
```

### Utilities

Scanner
```Java
  import java.util.Scanner;

  Scanner sc = new Scanner(System.in);
```

```Java
  int[] nums = {5,15,3,6,12,6,1,4};
  
  //sorts and modifies the original array
  Arrays.sort(nums);
  
  for(int i:nums) {
    System.out.println(i);
  }

  // This will print out the reference in memory
  System.out.println(nums);
```

