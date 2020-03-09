# Java

## Data Types
Primitive Data types, unchangable
- int : integer
- float : floating decimal point
- boolean : true or false
- char : characters, can only be 1 character, single quotations

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