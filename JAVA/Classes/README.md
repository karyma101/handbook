# Classes

Classes define the state and behavior of their instances. Behavior comes from methods defined in the class. State comes from instance fields declared inside the class. If we add final before a parent class method’s access modifier, we disallow any child classes from changing that method. A Java class can inherit fields and methods from another class. Each Java class requires its own file, but only one class in a Java package needs a main() method. Child classes inherit the parent constructor by default, but it’s possible to modify the constructor using super() or override it completely. You can use protected and final to control child class access to parent class members.

Polymorphism, allows a child class to share the information and behavior of its parent class while also incorporating its own functionality. Simplifies syntax and reduces cognitive overload for developers. Java’s OOP principle of polymorphism means you can use a child class object like a member of its parent class, but also give it its own traits. You can override parent class methods in the child class, ideally using the @Override keyword. Method override, in order to properly override the method name, return type, number and type of parameters.

It’s possible to use objects of different classes that share a parent class together in an array or ArrayList.

```Java
class BankAccount {

  protected double balance;

  public void printBalance() {
    System.out.println("Your account balance is $" + balance);
  }
}

class CheckingAccount extends BankAccount {

  @Override
  public void printBalance() {
    System.out.println("Your checking account balance is $" + balance);
  }
}
```

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
    // Instances
    private String name;
    private int age;
    
    // Constructor Method
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


```Java
public class Main {

	public static void main(String[] args) {
		Student joe = new Student("Joe");
		Student bill = new Student("Bill");
		Student tim = new Student("Tim");
		
		System.out.println(joe.equals(bill));
		System.out.println(joe.equals(joe));
		System.out.println(joe == bill);
		
		System.out.println(joe.comparedTo(tim));
		
		// Automatic reference toString method
		System.out.println(joe);
	}
}

public class Student implements Comparable<Student>{
	private String name;
	
	public  Student(String name) {
		this.name = name;
	}
	
	public boolean equals(Student other) {
		if(this.name == other.name) {
			return true;
		} else {
			return false;
		}
	}
	
	public int comparedTo(Student other) {
		return this.name.compareTo(other.name);
	}
	
  // default method when you printout class object
	public String toString() {
		return this.name;
	}
}
```
