# Classes

Classes define the state and behavior of their instances. Behavior comes from methods defined in the class. State comes from instance fields declared inside the class.

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
	
	public String toString() {
		return this.name;
	}
}
```