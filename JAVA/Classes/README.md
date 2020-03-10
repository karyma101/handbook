# Classes

Methods are function inside of objects/classes.

```Java
  public class Main {
    public static void main(String[] args) {
      greet("kary");
      System.out.println(add2(6));
    }

    public static void greet(String name) {
      System.out.println("Hello " + name);
    }

    public static int add2(int x){
      return x + 2;
    }
  }
```

Creating Classes.

```Java
  // Dog.java
  public class Dog {
    private String name;
    private int age;
    
    public Dog(String name, int age) {
      this.name = name;
      this.age = age;
    }
    
    public void speak(){
      System.out.println("I am " + this.name + " and I am " + this.age + " years old.");
    }
  }

  //Main.java
  public class Main {
    public static void main(String[] args) {
      Dog kary = new Dog("Kary", 2);
      
      kary.speak();
    }
  }
```